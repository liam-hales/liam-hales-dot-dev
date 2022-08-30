import { useMediaQuery, useTheme } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, NavKey, NavRoute, ScreenSize, BoxJustify } from '../../../enums';
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
  const { breakpoints } = useTheme();
  const { goTo } = useRouter();

  const mediaQuery = breakpoints.down(ScreenSize.MEDIUM);
  const belowMedium = useMediaQuery(mediaQuery);

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
          )
        }
      </StyledTopNav>
    </StyledBackground>
  );
};

export default TopNav;
