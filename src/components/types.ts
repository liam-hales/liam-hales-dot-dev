import { themes } from '../constants';

/**
 * Describes the app themes
 */
export type Theme = (typeof themes)[number];

/**
 * Describes the status used for
 * the `Loader` component
 */
export type LoaderStatus = 'loading' | 'success' | 'error';
