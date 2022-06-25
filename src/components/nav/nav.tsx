import { FunctionComponent, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BaseProps } from '../../types';
import { ScreenSize } from '../../enums';
import { TopNav, BottomNav } from '..';
import { useScreen } from '../../hooks';

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
      <TopNav />
      {children}
      {
        (screenSize === ScreenSize.EXTRA_SMALL) && (
          <BottomNav />
        )
      }
    </BrowserRouter>
  );
};

export default Nav;
