import { useMediaQuery, useTheme } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxDirection, NavKey, NavRoute, ScreenSize, BoxJustify } from '../../../enums';
import { useNav } from '../../../hooks';
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
  const { breakpoints } = useTheme();

  const navigate = useNavigate();
  const belowMedium = useMediaQuery(breakpoints.down(ScreenSize.MEDIUM));

  return (
    <StyledBackground>
      <StyledTopNav
        direction={
          (belowMedium === true)
            ? BoxDirection.COLUMN
            : BoxDirection.ROW
        }
        justify={
          (belowMedium === true)
            ? BoxJustify.CENTER
            : BoxJustify.START
        }
      >
        <StyledLogoSvg />
        {
          (belowMedium === false) && (
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
