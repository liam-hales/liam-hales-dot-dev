import { FunctionComponent, ReactElement } from 'react';
import { StatusHandler, Content, HomeHeader } from '../..';
import { PageSlug } from '../../../graphql';
import { usePageQuery } from '../../../hooks';
import {
  StyledAboutMe,
  StyledSkillAreas,
  StyledProStatement,
  StyledStillInterested,
} from './homeRoute.styled';

/**
 * Used as the entry point for the home page.
 * Fetches the page data and renders it's components
 *
 * @returns The `HomeRoute` component
 */
const HomeRoute: FunctionComponent = (): ReactElement => {

  const { status } = usePageQuery({
    slug: PageSlug.HOME,
  });

  return (
    <StatusHandler status={status}>
      <HomeHeader />
      <Content>
        <StyledAboutMe />
        <StyledSkillAreas />
        <StyledProStatement />
        <StyledStillInterested />
      </Content>
    </StatusHandler>
  );
};

export default HomeRoute;
