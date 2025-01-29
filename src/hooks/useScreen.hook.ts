'use client';

import { RefObject } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DeviceType, ScreenSize } from '../types';
import { useRender } from '.';

/**
 * The `useScreen` hook response
 */
interface UseScreenResponse {
  readonly screenSize?: ScreenSize;

  /**
   * Scrolls to an HTML element using
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
  readonly scrollTo: <T extends HTMLElement | null>(ref: RefObject<T>) => void;
}

/**
 * Used to access information about the screen such as its
 * size and perform actins such as scroll
 *
 * @param deviceType Used to drive the `screenSize`, is **ONLY** used during SSR
 * @returns The `useScreen` hook response
 * @example
 *
 * const { screenSize, scrollTo } = useScreen();
 */
const useScreen = (deviceType?: DeviceType): UseScreenResponse => {

  const { breakpoints } = useTheme();
  const { renderType } = useRender();

  const isSmall = useMediaQuery(breakpoints.only('small'));
  const isMedium = useMediaQuery(breakpoints.only('medium'));
  const isLarge = useMediaQuery(breakpoints.only('large'));

  /**
   * Scrolls to an HTML element using
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
  const scrollTo = <T extends HTMLElement | null>(ref: RefObject<T>): void => {
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

  // If the render type is client side and the device type has been
  // set then use the device type to determine the screen size
  if (
    renderType === 'server-side' &&
    deviceType != null
  ) {
    return {
      scrollTo: scrollTo,
      screenSize: (deviceType === 'mobile') ? 'small' : 'large',
    };
  }

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
