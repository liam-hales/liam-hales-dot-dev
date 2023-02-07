import { ReactElement } from 'react';
import { Page, SearchVariables, lifeTimelinePageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks';
import { PageProps, ServerComponent } from '../../../types';
import LifeTimeline from './lifeTimeline';

/**
 * Set the Next.js revalidate to `0` which will make sure this page is always dynamically
 * rendered which is required because this page uses `searchParams`
 *
 * @see https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
 */
export const revalidate = 0;

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
