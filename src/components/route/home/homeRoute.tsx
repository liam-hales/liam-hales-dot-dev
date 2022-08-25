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
 * Fetches the home page data and renders the
 * components that make up the app home page
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
