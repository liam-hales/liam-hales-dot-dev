import { FunctionComponent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxAlignment, NavKey, NavRoute } from '../../../enums';
import { useNav } from '../../../hooks';
import { Tab, Tabs } from '../../common';
import { StyledBackground, StyledTopNav } from './topNav.styled';

/**
 * Renders the top navigation bar used for navigating the
 * app for any screen size apart from  extra small
 *
 * @returns The `TopNav` component
 */
const TopNav: FunctionComponent = (): ReactElement => {

  const navigate = useNavigate();
  const { navKey } = useNav();

  return (
    <StyledBackground>
      <StyledTopNav alignment={BoxAlignment.START}>
        <Tabs value={navKey}>
          <Tab
            value={NavKey.HOME}
            onClick={() => navigate(NavRoute.HOME)}
          >
            Home
          </Tab>
          <Tab
            value={NavKey.CV}
            onClick={() => navigate(NavRoute.CV)}
          >
            CV
          </Tab>
          <Tab
            value={NavKey.BLOG}
            onClick={() => navigate(NavRoute.BLOG)}
          >
            Blog
          </Tab>
          <Tab
            value={NavKey.BRAND}
            onClick={() => navigate(NavRoute.BRAND)}
          >
            Brand
          </Tab>
        </Tabs>
      </StyledTopNav>
    </StyledBackground>
  );
};

export default TopNav;
