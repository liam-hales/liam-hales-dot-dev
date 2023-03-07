import { ReactElement } from 'react';
import { Page, SearchVariables, lifeTimelinePageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps, ServerComponent } from '../../../types';
import LifeTimeline from './lifeTimeline';

/**
 * The entry point for the CV life timeline page route `/cv/life-timeline`, used to fetch the required
 * data and render the `LifeTimeline` component passing said data as props
 *
 * @returns The `LifeTimelinePage` component
 */
const LifeTimelinePage: ServerComponent<PageProps> = async ({ searchParams = {} }): Promise<ReactElement<PageProps>> => {

  const { search } = searchParams;
  const { content } = await useQuery<Page<'life-timeline'>, SearchVariables>(lifeTimelinePageQuery, {
    variables: {
      search: search ?? '',
    },
  });

  return (
    <LifeTimeline
      content={content}
      search={search}
    />
  );
};

export default LifeTimelinePage;
