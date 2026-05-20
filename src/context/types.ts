import { UIMessage } from 'ai';

/**
 * Describes the app state
 * for the `AppContext`
 */
export interface AppState {
  readonly inputValue: string;
  readonly messages: UIMessage[];
}

/**
 * Describes the app actions
 * for the `AppContext`
 */
export interface AppActions {
  /**
   * Used to set the
   * input value
   *
   * @param value The new input value
   */
  readonly setInputValue: (value: string) => void;

  /**
   * Used to send a message
   * to the AI model
   */
  readonly sendMessage: () => void;
}
