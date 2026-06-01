'use client';

import { FunctionComponent, ReactElement, ReactNode, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { convertToModelMessages, generateId, readUIMessageStream } from 'ai';
import { streamMessage } from '../helpers';
import { Status, Message } from '../types';

/**
 * The `AppProvider` component props
 */
interface Props {
  readonly children: ReactNode;
}

/**
 * Used to provide the `AppContext` value which
 * consists of the app state and actions
 *
 * @param props The component props
 * @returns The `AppProvider` component
 * @example
 *
 * return (
 *   <AppProvider>
 *     { ... }
 *   </AppProvider>
 * );
 */
const AppProvider: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  const [environment, setEnvironment] = useState<'client' | 'server'>('server');
  const [status, setStatus] = useState<Status>({
    id: 'idle',
  });

  const [inputValue, setInputValue] = useState<string>('');
  const [mancMode, setMancMode] = useState<boolean>(true);

  const [abortController, setAbortController] = useState<AbortController | undefined>();
  const [messages, setMessages] = useState<Message[]>([]);

  /**
   * Used to set the environment state to
   * `client` when the component mounts
   */
  useEffect(() => setEnvironment('client'), []);

  /**
   * Used to send a message
   * to the AI model
   */
  const sendMessage = async (): Promise<void> => {
    // Trim the input and define a new abort
    // controller for each request
    const trimmedValue = inputValue.trim();
    const abortController = new AbortController();

    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      parts: [
        {
          type: 'text',
          text: trimmedValue,
        },
      ],
    };

    setInputValue('');
    setAbortController(abortController);

    // Set the app status to `loading` to show
    // that the request to the LLM is in progress
    setStatus({
      id: 'loading',
    });

    setMessages((previous) => {
      return [
        ...previous,
        userMessage,
      ];
    });

    try {
      // Set the abort controller to throw if aborted throughout this `try` block so the
      // logic will fall into the `catch` block and the error can be handled

      abortController.signal.throwIfAborted();

      const allMessages = [
        ...messages,
        userMessage,
      ];

      // Convert the message state into messages
      // in the correct format ready for the LLM
      const modelMessages = await convertToModelMessages(allMessages);
      const stream = await streamMessage({
        messages: modelMessages,
        mancMode: mancMode,
      });

      // Read the stream and convert the
      // message chunks into full messages
      const messageStream = readUIMessageStream<Message>({
        stream: stream,
      });

      abortController.signal.throwIfAborted();

      // process the client stream value
      // and process each message
      for await (const message of messageStream) {
        abortController.signal.throwIfAborted();

        // If the message has no parts then
        // continue and wait until it does
        if (message.parts.length === 0) {
          continue;
        }

        setStatus({
          id: 'streaming',
        });

        setMessages((previous) => {
          const { role } = previous[previous.length - 1];

          // If the last message is a user message then we can just append the new message,
          // however if it's an assistant message then we need to replace the entire message
          return [
            ...(role === 'user') ? previous : previous.slice(0, -1),
            message,
          ];
        });
      }

      // Reset the app status back to `idle` once
      // the stream has finished being processed
      setStatus({
        id: 'idle',
      });
    }
    catch (error) {
      if (error instanceof Error) {
        // If the error is an abort error
        // then handle it accordingly
        if (error.name === 'AbortError') {
          return;
        }

        setStatus({
          id: 'error',
          error: error,
        });
      }

      throw error;
    }
  };

  /**
   * Used to abort/cancel the
   * current request to the LLM
   *
   * @param reason The reason for aborting
   */
  const abortRequest = (reason?: string): void => {
    const error = new Error(reason);
    error.name = 'AbortError';

    // Abort the chat request using the abort
    // controller with a given reason
    abortController?.abort(error);

    // Reset the status
    // back to `idle`
    setStatus({
      id: 'idle',
    });
  };

  return (
    <AppContext.Provider value={
      {
        environment: environment,
        status: status,
        inputValue: inputValue,
        mancMode: mancMode,
        messages: messages,
        setInputValue: setInputValue,
        setMancMode: setMancMode,
        sendMessage: sendMessage,
        abortRequest: abortRequest,
      }
    }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
