import { FunctionComponent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxDirection, BoxAlignment, NavKey, NavRoute, ScreenSize } from '../../../enums';
import { useNav, useScreen } from '../../../hooks';
import { Tab } from '../../common';
import { StyledBackground, StyledTopNav, StyledLogoSvg, StyledTabs } from './topNav.styled';

/**
 * Renders the top navigation bar used for navigating the
 * app for any screen size apart from  extra small
 *
 * @returns The `TopNav` component
 */
const TopNav: FunctionComponent = (): ReactElement => {

  const navigate = useNavigate();
  const { navKey } = useNav();
  const { screenSize } = useScreen();

  return (
    <StyledBackground>
      <StyledTopNav
        alignment={BoxAlignment.CENTER}
        direction={
          (screenSize === ScreenSize.EXTRA_SMALL)
            ? BoxDirection.COLUMN
            : BoxDirection.ROW
        }
      >
        <StyledLogoSvg />
        {
          (screenSize !== ScreenSize.EXTRA_SMALL) && (
            <StyledTabs value={navKey}>
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
            </StyledTabs>
          )
        }
      </StyledTopNav>
    </StyledBackground>
  );
};

export default TopNav;
