'use client';

import { FunctionComponent, ReactElement, useEffect, useRef } from 'react';
import { Header, Welcome, ChatInput, ChatOption, ChatError, UserMessage, AssistantMessage, Loader } from './';
import { useApp } from '../hooks';
import { modelName } from '../constants';

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const userMessageRef = useRef<HTMLDivElement>(null);

  /**
   * Used to update the scroll container to reserve space
   * for a new message when one is added to state
   */
  useEffect(() => {
    const scroll = scrollRef.current;
    const userMessage = userMessageRef.current;

    if (scroll == null || userMessage == null) {
      return;
    }

    /**
     * Calculates the space reserved below the last message
     * so it can be pinned to the top of the scroll container
     */
    const updateReserve = (): void => {
      const reserve = Math.max((scroll.clientHeight - userMessage.offsetHeight - 160), 0);
      scroll.style.setProperty('--chat-reserve', `${reserve}px`);
    };

    updateReserve();
    userMessage.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Keep the reserved space in sync when the container resizes
    // due to a screen resize or device orientation change
    const observer = new ResizeObserver(() => updateReserve());
    observer.observe(scroll);

    return () => {
      observer.disconnect();
    };
  }, [messages.length]);

  return (
    <div className="h-full flex flex-col items-center bg-base pt-3 pb-6">
      <div className="w-full flex-col items-center px-3">
        <Header />
      </div>
      <div
        ref={scrollRef}
        className="w-full h-full max-w-185 flex flex-col items-center no-scrollbar overflow-y-auto overflow-x-hidden touch-pan-y px-3 pt-8 pb-8"
      >
        {
          (messages.length === 0) && (
            <Welcome
              className="sm:h-full"
              onSuggestion={setInputValue}
            />
          )
        }
        <div className="w-full flex flex-col items-center gap-y-6 px-3">
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
                    ref={userMessageRef}
                    className="self-end"
                    key={`user-message-${id}`}
                    parts={textParts}
                  />
                );
              }

              // If the message role is `assistant` then
              // render the `AssistantMessage` component
              if (role === 'assistant') {
                const lastMessage = messages.at(-1);
                const messageParts = parts.filter((part) => part.type.includes('step') === false);

                return (
                  <AssistantMessage
                    className={`self-start ${(id === lastMessage?.id) ? 'min-h-(--chat-reserve,0px)' : ''}`}
                    key={`assistant-message-${id}`}
                    parts={messageParts}
                  />
                );
              }
            })
          }
          {
            (status.id === 'loading') && (
              <div className="w-full flex flex-col items-start min-h-(--chat-reserve,0px)">
                <Loader status="loading">
                  Thinking
                </Loader>
              </div>
            )
          }
          {
            (status.id === 'error') && (
              <div className="w-full flex flex-col items-start min-h-(--chat-reserve,0px)">
                <ChatError>
                  {status.error.message}
                </ChatError>
              </div>
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
          status={(status.id === 'error') ? 'idle' : status.id}
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
