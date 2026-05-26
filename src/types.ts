import { Ref } from 'react';
import { InferUIMessageChunk, InferUITools, TextUIPart, ToolUIPart, UIDataTypes, UIMessage } from 'ai';
import { tools } from './tools';

/**
 * Describes all tools that
 * can be used by the LLM
 */
export type Tools = InferUITools<typeof tools>;

/**
 * Describes the message chunk
 * used for the LLM streams
 */
export type MessageChunk = InferUIMessageChunk<Message>;

/**
 * Describes the message part
 * that lives with the message
 */
export type MessagePart = TextUIPart | ToolUIPart<Tools>;

/**
 * Describes the message used to communicate
 * between the user and LLM
 */
export type Message = Omit<UIMessage<unknown, UIDataTypes, Tools>, 'parts'> & {
  readonly parts: MessagePart[];
};

/**
 * Describes the different
 * app statuses
 */
export type Status =
  {
    readonly id: 'idle' | 'loading' | 'streaming';
  }
  | ErrorStatus;

/**
 * Describes the app
 * error status
 */
export interface ErrorStatus {
  readonly id: 'error';
  readonly error: Error;
}

/**
 * The props that all component
 * props should `extends`
 *
 * - Generic type `T` for the `internalRef`
 *
 * The `internalRef` prop is used with the `withRef`
 * helper to forward component references
 *
 * @see [React - Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
 */
export interface BaseProps<T extends HTMLElement = HTMLElement> {
  readonly internalRef?: Ref<T>;
  readonly className?: string;
}
