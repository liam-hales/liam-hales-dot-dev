import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, NavKey, NavRoute, BoxJustify } from '../../../enums';
import { useNav, useRouter } from '../../../hooks';
import { Tab } from '../../common';
import { StyledBackground, StyledTopNav, StyledLogoSvg, StyledTabs } from './topNav.styled';

/**
 * Renders the top navigation bar used for navigating the
 * app for any screen size apart from  extra small
 *
 * @returns The `TopNav` component
 */
const TopNav: FunctionComponent = (): ReactElement => {

  const { navKey } = useNav();
  const { goTo } = useRouter();

  return (
    <StyledBackground>
      <StyledTopNav
        direction={BoxDirection.ROW}
        justify={BoxJustify.START}
      >
        <StyledLogoSvg />
        <StyledTabs value={navKey}>
          <Tab
            value={NavKey.HOME}
            onClick={() => goTo(NavRoute.HOME)}
          >
            Home
          </Tab>
          <Tab
            value={NavKey.CV}
            onClick={() => goTo(NavRoute.CV)}
          >
            CV
          </Tab>
          <Tab
            value={NavKey.BLOG}
            onClick={() => goTo(NavRoute.BLOG)}
          >
            Blog
          </Tab>
          <Tab
            value={NavKey.BRAND}
            onClick={() => goTo(NavRoute.BRAND)}
          >
            Brand
          </Tab>
        </StyledTabs>
      </StyledTopNav>
    </StyledBackground>
  );
};

export default TopNav;
