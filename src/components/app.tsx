'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Header, Welcome, ChatInput, ChatOption, UserMessage, AssistantMessage, Loader } from './';
import { useApp } from '../hooks';
import { modelId } from '../constants';

/**
 * The component responsible for rendering the main application,
 * its layout and any downstream child components
 *
 * @returns The `App` component
 */
const App: FunctionComponent = (): ReactElement => {
  const {
    status,
    inputValue,
    mancMode,
    messages,
    setInputValue,
    setMancMode,
    sendMessage,
    abortRequest,
    clearChat,
  } = useApp();

  const [, modelName] = modelId.split('/');
  return (
    <div className="h-full flex flex-col items-center bg-base pt-3 pb-6">
      <div className="w-full flex-col items-center px-3">
        <Header />
      </div>
      <div className="w-full h-full max-w-185 flex flex-col items-center no-scrollbar overflow-y-auto overflow-x-hidden px-3 pt-6 pb-10">
        {
          (messages.length === 0) && (
            <Welcome
              className="sm:h-full"
              onSuggestion={setInputValue}
            />
          )
        }
        <div className="w-full flex flex-col items-center gap-y-8 px-3">
          {
            messages.map((message) => {
              const { id, role, parts } = message;

              // If the message role is `user` then
              // render the `UserMessage` component
              if (role === 'user') {
                // The user message should only contain
                // text parts, filter out any others
                const textParts = parts.filter((part) => part.type === 'text');
                return (
                  <UserMessage
                    className="self-end"
                    key={`user-message-${id}`}
                    parts={textParts}
                  />
                );
              }

              // If the message role is `assistant` then
              // render the `AssistantMessage` component
              if (role === 'assistant') {
                return (
                  <AssistantMessage
                    className="self-start"
                    key={`assistant-message-${id}`}
                    parts={parts}
                  />
                );
              }
            })
          }
          {
            (status.id === 'loading') && (
              <Loader
                className="self-start"
                status="loading"
              >
                Thinking
              </Loader>
            )
          }
        </div>
      </div>
      <div className={`
        w-full max-w-185 flex flex-col items-center gap-y-3 px-3
        ${(messages.length === 0) ? 'sm:border-none border-t border-solid border-divider pt-3 sm:pb-10' : 'py-0 border-none'}
      `}
      >
        {
          (messages.length === 0) && (
            <ChatOption
              className="self-end"
              text="Manc mode"
              isOn={mancMode}
              onChange={setMancMode}
            />
          )
        }
        <ChatInput
          className="w-full"
          value={inputValue}
          status={(status.id === 'idle') ? 'send' : 'abort'}
          showActions={messages.length > 0}
          onChange={setInputValue}
          onClear={clearChat}
          onSend={sendMessage}
          onAbort={abortRequest}
        />
        <p className="text-content-secondary text-xs text-center leading-5 px-3">
          {'This chat is powered by AI and uses '}
          <code className="text-accent text-[10px] bg-surface-mid border border-solid border-outline rounded-sm px-1 py-0.5">
            {modelName}
          </code>
          {' to portray Liam Hales — answers may not be 100% accurate.'}
        </p>
      </div>
    </div>
  );
};

export default App;
