import { useEffect } from 'react';

/**
 * Debounces a given `func` by invoking said function
 * after the `delay` in milliseconds
 *
 * @param func The function to debounce
 * @param delay The delay in milliseconds before calling the `func`
 * @example
 *
 * useDebounce(() => { ... }, 1000);
 */
const useDebounce = <T extends () => void>(func: T, delay: number): void => {
  useEffect(() => {
    // Define the set timeout handler which invokes
    // the function with the specified delay
    const handler = setTimeout(() => func(), delay);

    // Clear the set timeout handler
    // in the cleanup function
    return (): void => {
      clearTimeout(handler);
    };
  }, [func, delay]);
};

export default useDebounce;
