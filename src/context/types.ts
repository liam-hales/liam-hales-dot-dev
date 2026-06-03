import { Status, Message } from '../types';

/**
 * Describes the app state
 * for the `AppContext`
 */
export interface AppState {
  readonly environment: 'client' | 'server';
  readonly status: Status;
  readonly inputValue: string;
  readonly mancMode: boolean;
  readonly messages: Message[];
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
  readonly sendMessage: () => Promise<void>;

  /**
   * Used to abort/cancel the
   * current request to the LLM
   *
   * @param reason The reason for aborting
   */
  readonly abortRequest: (reason?: string) => void;

  /**
   * Used to clear all messages
   * and reset the chat
   */
  readonly clearMessages: () => void;
}
