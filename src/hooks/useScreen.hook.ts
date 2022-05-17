import { useMediaQuery, useTheme } from '@mui/material';
import { ScreenSize } from '../enums';

/**
 * The `useScreen` hook response
 */
interface UseScreenResponse {
  screenSize: ScreenSize;
}

/**
 * Used to access values about the screen
 * such as the `screenSize`
 *
 * @returns The `useScreen` hook response
 */
const useScreen = (): UseScreenResponse => {

  const { breakpoints } = useTheme();

  const extraSmall = useMediaQuery(breakpoints.only(ScreenSize.EXTRA_SMALL));
  const small = useMediaQuery(breakpoints.only(ScreenSize.SMALL));
  const medium = useMediaQuery(breakpoints.only(ScreenSize.MEDIUM));
  const large = useMediaQuery(breakpoints.only(ScreenSize.LARGE));

  if (extraSmall === true) {
    return {
      screenSize: ScreenSize.EXTRA_SMALL,
    };
  }

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

  if (large === true) {
    return {
      screenSize: ScreenSize.LARGE,
    };
  }

  // Return extra large as the default screen size
  // if none of the screen sizes are true
  return {
    screenSize: ScreenSize.EXTRA_LARGE,
  };
};

export default useScreen;
