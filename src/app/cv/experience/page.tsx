import { ReactElement } from 'react';
import { Page, experiencePageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps, AsyncComponent } from '../../../types';
import { buildPageMetadata } from '../../../helpers/server';
import Experience from './experience';

/**
 * The entry point for the CV experience page route `/cv/experience`, used to fetch the required
 * data and render the `Experience` component passing said data as props
 *
 * @param props The component props
 * @returns The `ExperiencePage` component
 */
const ExperiencePage: AsyncComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const { content } = await useQuery<Page<'experience'>>(experiencePageQuery);
  return (
    <Experience content={content} />
  );
};

export default ExperiencePage;
export const generateMetadata = buildPageMetadata(experiencePageQuery);
