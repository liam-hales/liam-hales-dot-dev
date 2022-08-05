import { FunctionComponent, ReactElement } from 'react';
import { IconId, NavKey, NavRoute } from '../../../enums';
import { useNav, useRouter } from '../../../hooks';
import { Text } from '../../common';
import {
  StyledBottomNav,
  StyledBottomNavigation,
  StyledBottomNavigationAction,
  StyledIcon,
} from './bottomNav.styled';

/**
 * Renders the bottom navigation bar used for navigating
 * the app for extra small screen sizes
 *
 * @returns The `BottomNav` component
 */
const BottomNav: FunctionComponent = (): ReactElement => {

  const { goTo } = useRouter();
  const { navKey } = useNav();

  return (
    <StyledBottomNav>
      <StyledBottomNavigation value={navKey}>
        <StyledBottomNavigationAction
          value={NavKey.HOME}
          onClick={() => goTo(NavRoute.HOME)}
          label={(
            <Text bold={true}>
              Home
            </Text>
          )}
          icon={
            <StyledIcon id={IconId.HOME} />
          }
        />
        <StyledBottomNavigationAction
          value={NavKey.CV}
          onClick={() => goTo(NavRoute.CV)}
          label={(
            <Text bold={true}>
              CV
            </Text>
          )}
          icon={
            <StyledIcon id={IconId.DOCUMENT} />
          }
        />
        <StyledBottomNavigationAction
          value={NavKey.BLOG}
          onClick={() => goTo(NavRoute.BLOG)}
          label={(
            <Text bold={true}>
              Blog
            </Text>
          )}
          icon={
            <StyledIcon id={IconId.MESSAGE} />
          }
        />
        <StyledBottomNavigationAction
          value={NavKey.BRAND}
          onClick={() => goTo(NavRoute.BRAND)}
          label={(
            <Text bold={true}>
              Brand
            </Text>
          )}
          icon={
            <StyledIcon id={IconId.PAINT_BRUSH} />
          }
        />
      </StyledBottomNavigation>
    </StyledBottomNav>
  );
};

export default BottomNav;
