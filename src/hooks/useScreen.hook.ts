import { useMediaQuery, useTheme } from '@mui/material';
import { ScreenSize } from '../enums';

/**
 * The `useScreen` hook response
 */
interface UseScreenResponse {
  readonly screenSize: ScreenSize;
}

/**
 * Used to access values about the screen
 * such as the `screenSize`
 *
 * @returns The `useScreen` hook response
 * @example
 *
 * const { screenSize } = useScreen();
 */
const useScreen = (): UseScreenResponse => {

  const { breakpoints } = useTheme();

  const small = useMediaQuery(breakpoints.only(ScreenSize.SMALL));
  const medium = useMediaQuery(breakpoints.only(ScreenSize.MEDIUM));

  if (small === true) {
    return {
      screenSize: ScreenSize.SMALL,
    };
  }

  if (medium === true) {
    return {
      screenSize: ScreenSize.MEDIUM,
    };
  }

  // Return large as the default screen size
  // if none of the screen sizes are true
  return {
    screenSize: ScreenSize.LARGE,
  };
};

export default useScreen;
