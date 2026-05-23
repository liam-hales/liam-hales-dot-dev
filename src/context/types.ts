import { UIMessage } from 'ai';

/**
 * Describes the app state
 * for the `AppContext`
 */
export interface AppState {
  readonly environment: 'client' | 'server';
  readonly inputValue: string;
  readonly mancMode: boolean;
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
   * Used to toggle the
   * "Manc mode" option
   *
   * @param value The new mode value
   */
  readonly setMancMode: (value: boolean) => void;

  /**
   * Used to send a message
   * to the AI model
   */
  readonly sendMessage: () => void;
}
