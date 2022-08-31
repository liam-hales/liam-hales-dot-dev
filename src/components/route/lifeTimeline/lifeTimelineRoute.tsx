import { FunctionComponent, ReactElement } from 'react';
import { StatusHandler, Header, Content } from '../..';
import { PageSlug } from '../../../graphql';
import { usePageQuery } from '../../../hooks';
import { StyledLifeTimeline } from './lifeTimelineRoute.styled';

/**
 * Used as the entry point for the life timeline page.
 * Fetches the page data and renders it's components
 *
 * @returns The `LifeTimelineRoute` component
 */
const LifeTimelineRoute: FunctionComponent = (): ReactElement => {

  const { status } = usePageQuery({
    slug: PageSlug.LIFE_TIMELINE,
  });

  return (
    <>
      <Header title="Life Timeline" />
      <StatusHandler status={status}>
        <Content>
          <StyledLifeTimeline />
        </Content>
      </StatusHandler>
    </>
  );
};

export default LifeTimelineRoute;
