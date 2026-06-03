'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Header, Welcome, Input, Option, UserMessage, AssistantMessage, Loader } from './';
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
    clearMessages,
  } = useApp();

  const [, modelName] = modelId.split('/');
  return (
    <div className="h-full flex flex-col items-center bg-base px-3 pt-3 pb-6">
      <Header />
      <div className="w-full flex-1 min-h-0 max-w-185 flex flex-col items-center">
        <div className="w-full h-full flex flex-col items-center gap-y-8 no-scrollbar overflow-y-auto overflow-x-hidden px-3 pt-6 pb-10">
          {
            (messages.length === 0) && (
              <Welcome onSuggestion={setInputValue} />
            )
          }
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
        <div className={`
          w-full flex flex-col items-center
          ${(messages.length === 0) ? 'mb-10' : 'm-0'}
        `}
        >
          <div className="w-full flex flex-col items-center gap-y-3">
            {
              (messages.length === 0) && (
                <Option
                  className="self-end"
                  text="Manc mode"
                  isOn={mancMode}
                  onChange={setMancMode}
                />
              )
            }
            <Input
              className="w-full"
              value={inputValue}
              status={(status.id === 'idle') ? 'send' : 'abort'}
              onChange={setInputValue}
              onClear={clearMessages}
              onSend={sendMessage}
              onAbort={abortRequest}
            />
            <p className="text-content-secondary text-xs">
              {'This chat is powered by AI and uses '}
              <code className="text-accent text-[10px] bg-surface-mid border border-solid border-outline rounded-sm px-1 py-0.5">
                {modelName}
              </code>
              {' to portray Liam Hales — answers may not be 100% accurate.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
