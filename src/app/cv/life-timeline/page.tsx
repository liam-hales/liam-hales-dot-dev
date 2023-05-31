import { ReactElement } from 'react';
import { Page, lifeTimelinePageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps, AsyncComponent } from '../../../types';
import { buildPageMetadata } from '../../../helpers/server';
import LifeTimeline from './lifeTimeline';

/**
 * The entry point for the CV life timeline page route `/cv/life-timeline`, used to fetch the required
 * data and render the `LifeTimeline` component passing said data as props
 *
 * @param props The component props
 * @returns The `LifeTimelinePage` component
 */
const LifeTimelinePage: AsyncComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const { content } = await useQuery<Page<'life-timeline'>>(lifeTimelinePageQuery);
  return (
    <LifeTimeline content={content} />
  );
};

export default LifeTimelinePage;
export const generateMetadata = buildPageMetadata(lifeTimelinePageQuery);
