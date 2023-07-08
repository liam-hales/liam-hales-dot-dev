import { ReactElement } from 'react';
import { Page, timelinePageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps, AsyncComponent } from '../../../types';
import { buildPageMetadata } from '../../../helpers/server';
import Timeline from './timeline';

/**
 * The entry point for the CV timeline page route `/cv/timeline`, used to fetch the required
 * data and render the `Timeline` component passing said data as props
 *
 * @param props The component props
 * @returns The `TimelinePage` component
 */
const TimelinePage: AsyncComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const { content } = await useQuery<Page<'timeline'>>(timelinePageQuery);
  return (
    <Timeline content={content} />
  );
};

export default TimelinePage;
export const generateMetadata = buildPageMetadata(timelinePageQuery);
