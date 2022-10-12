import { FunctionComponent, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BaseProps } from '../../types';
import { BoxJustify, ScreenSize } from '../../enums';
import { TopNav, BottomNav } from '..';
import { useScreen } from '../../hooks';
import { StyledLogoBox, StyledLogoSvg, StyledBottmSpacer } from './nav.styled';

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

  const { screenSize } = useScreen();
  return (
    <BrowserRouter>
      {
        (screenSize === ScreenSize.SMALL) && (
          <StyledLogoBox justify={BoxJustify.CENTER}>
            <StyledLogoSvg />
          </StyledLogoBox>
        )
      }
      {
        (screenSize !== ScreenSize.SMALL) && (
          <TopNav />
        )
      }
      {children}
      {
        (screenSize === ScreenSize.SMALL) && (
          <>
            <BottomNav />
            <StyledBottmSpacer />
          </>
        )
      }
    </BrowserRouter>
  );
};

export default Nav;
