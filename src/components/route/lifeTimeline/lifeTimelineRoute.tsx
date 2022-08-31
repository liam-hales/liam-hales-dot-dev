import { FunctionComponent, ReactElement } from 'react';
import { StatusHandler, Header, Content } from '../..';
import { PageSlug } from '../../../graphql';
import { usePageQuery } from '../../../hooks';
import { StyledLifeTimeline } from './lifeTimelineRoute.styled';

/**
 * Fetches the life timeline page data and renders the
 * components that make up the app life timeline page
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
