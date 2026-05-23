'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Header, Welcome, Input, Option } from './';
import { useApp } from '../hooks';

/**
 * The component responsible for rendering the main application,
 * its layout and any downstream child components
 *
 * @returns The `App` component
 */
const App: FunctionComponent = (): ReactElement => {
  const {
    inputValue,
    mancMode,
    messages,
    setInputValue,
    setMancMode,
    sendMessage,
  } = useApp();

  return (
    <div className="h-full flex flex-col items-center justify-between bg-base">
      <Header />
      <div className="flex flex-col no-scrollbar overflow-y-auto overflow-x-hidden px-3 py-6">
        <Welcome onSuggestion={setInputValue} />
      </div>
      <div className={`
        w-full flex flex-col items-center px-3 pt-3 pb-10
        ${(messages.length > 0) ? 'border-t border-solid border-outline' : 'border-none'}
      `}
      >
        <div className="w-full max-w-175 flex flex-col items-end gap-y-3">
          <Option
            text="Manc mode"
            isOn={mancMode}
            onChange={setMancMode}
          />
          <Input
            className="w-full"
            value={inputValue}
            status="idle"
            onChange={setInputValue}
            onSend={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
