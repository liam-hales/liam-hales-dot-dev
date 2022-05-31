import { Context, useContext as _useContext } from 'react';

/**
 * Used to access the current context
 * value for a given `context`.
 *
 * Generic type `T` for the context value
 *
 * @param context The context
 * @returns The context value
 * @example
 *
 * const { ... } = useContext(Context);
 */
const useContext = <T extends Record<keyof T, unknown>>(context: Context<T | undefined>): T => {

  // Get the context value and check if it exists
  // If not then throw an error
  const value = _useContext(context);
  if (value == null) {
    throw new Error('"useContext" must be used within the corresponding provider component');
  }

  return value;
};

export default useContext;
