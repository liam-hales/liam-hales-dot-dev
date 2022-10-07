import { FunctionComponent, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { BaseProps } from '../../types';
import { BoxJustify, ScreenSize } from '../../enums';
import { TopNav, BottomNav } from '..';
import { StyledLogoBox, StyledLogoSvg } from './nav.styled';

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
      {
        (belowMedium === true) && (
          <StyledLogoBox justify={BoxJustify.CENTER}>
            <StyledLogoSvg />
          </StyledLogoBox>
        )
      }
      {
        (belowMedium === false) && (
          <TopNav />
        )
      }
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
