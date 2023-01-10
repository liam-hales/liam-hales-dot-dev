import { ReactElement } from 'react';
import { Page, PageSlug, SearchVariables, lifeTimelinePageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks';
import { PageProps, ServerComponent } from '../../../types';
import LifeTimeline from './lifeTimeline';

/**
 * The entry point for the CV life timeline page route `/cv/life-timeline`, used to fetch the required
 * data and render the `LifeTimeline` component passing said data as props
 *
 * @returns The `LifeTimelinePage` component
 */
const LifeTimelinePage: ServerComponent<PageProps> = async ({ searchParams = {} }): Promise<ReactElement<PageProps>> => {

  const { search = '' } = searchParams;
  const { content } = await useQuery<Page<PageSlug.LIFE_TIMELINE>, SearchVariables>(lifeTimelinePageQuery, {
    search: search,
  });

  return (
    <LifeTimeline
      content={content}
      search={search}
    />
  );
};

export default LifeTimelinePage;
