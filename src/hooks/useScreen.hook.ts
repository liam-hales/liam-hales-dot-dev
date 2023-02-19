'use client';

import { RefObject } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { ScreenSize } from '../types';

/**
 * The `useScreen` hook response
 */
interface UseScreenResponse {
  readonly screenSize?: ScreenSize;

  /**
   * Scrolls to a HTML element using
   * a `ref` to said element
   *
   * @param ref The HTML element reference
   * @example
   *
   * const ref = useRef();
   * const { scrollTo } = useScreen();
   *
   * scrollTo(ref);
   */
  readonly scrollTo: <T extends HTMLElement>(ref: RefObject<T>) => void;
}

/**
 * Used to access infomatin about the screen such as it's
 * size and perform actins such as scroll
 *
 * @returns The `useScreen` hook response
 * @example
 *
 * const { screenSize, scrollTo } = useScreen();
 */
const useScreen = (): UseScreenResponse => {

  const { breakpoints } = useTheme();

  const isSmall = useMediaQuery(breakpoints.only('small'));
  const isMedium = useMediaQuery(breakpoints.only('medium'));
  const isLarge = useMediaQuery(breakpoints.only('large'));

  /**
   * Scrolls to a HTML element using
   * a `ref` to said element
   *
   * @param ref The HTML element reference
   * @example
   *
   * const ref = useRef();
   * const { scrollTo } = useScreen();
   *
   * scrollTo(ref);
   */
  const scrollTo = <T extends HTMLElement>(ref: RefObject<T>): void => {
    const { current } = ref;

    // Check if the current element on
    // the ref exists before using it
    if (current == null) {
      return;
    }

    // Calculate the position to scroll to based on
    // the element position and the screen size
    const offset = (isSmall === true) ? 45 : 125;
    const position = current.offsetTop - offset;

    // Scroll to the element with
    // the smooth behavior option
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };

  if (isSmall === true) {
    return {
      scrollTo: scrollTo,
      screenSize: 'small',
    };
  }

  if (isMedium === true) {
    return {
      scrollTo: scrollTo,
      screenSize: 'medium',
    };
  }

  if (isLarge === true) {
    return {
      scrollTo: scrollTo,
      screenSize: 'large',
    };
  }

  return {
    scrollTo: scrollTo,
  };
};

export default useScreen;
