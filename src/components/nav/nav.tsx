import { FunctionComponent, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { BaseProps } from '../../types';
import { ScreenSize } from '../../enums';
import { TopNav, BottomNav } from '..';

/**
 * The `Nav` component props
 */
type Props = BaseProps;

/**
 * Controls the navigation for the app and what navigation
 * component should be rendered depending on the screen size
 *
 * @param props The component props
 * @returns The `Nav` component
 */
const Nav: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const { breakpoints } = useTheme();

  const mediaQuery = breakpoints.down(ScreenSize.MEDIUM);
  const belowMedium = useMediaQuery(mediaQuery);

  return (
    <BrowserRouter>
      <TopNav />
      {children}
      {
        (belowMedium === true) && (
          <BottomNav />
        )
      }
    </BrowserRouter>
  );
};

export default Nav;
