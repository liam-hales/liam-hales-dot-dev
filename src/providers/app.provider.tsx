import { FunctionComponent, ReactElement, ReactNode, useState } from 'react';
import { AppContext } from '../context';
import { generateId, UIMessage } from 'ai';

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
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<UIMessage[]>([]);

  /**
   * Used to send a message
   * to the AI model
   */
  const sendMessage = (): void => {
    const trimmedValue = inputValue.trim();

    setInputValue('');
    setMessages((previous) => {
      return [
        ...previous,
        {
          id: generateId(),
          role: 'user',
          parts: [
            {
              type: 'text',
              text: inputValue,
            },
          ],
        },
      ];
    });
  };

  return (
    <AppContext.Provider value={
      {
        inputValue: inputValue,
        messages: messages,
        setInputValue: setInputValue,
        sendMessage: sendMessage,
      }
    }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
