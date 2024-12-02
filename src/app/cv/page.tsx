import { ReactElement } from 'react';
import { Page, cvPageQuery, globalPageQuery } from '../../graphql';
import { useQuery } from '../../hooks/server';
import { PageProps, AsyncComponent } from '../../types';
import { buildPageMetadata } from '../../helpers/server';
import CV from './cv';

/**
 * The entry point for the CV page route `/cv`, used to fetch the required
 * data and render the `CV` component passing said data as props
 *
 * @returns The `CVPage` component
 */
const CVPage: AsyncComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const { content } = await useQuery<Page<'cv'>>(cvPageQuery);
  const { content: globalContent } = await useQuery<Page<'global'>>(globalPageQuery);

  return (
    <CV
      content={content}
      globalContent={globalContent}
    />
  );
};

export default CVPage;
export const generateMetadata = buildPageMetadata(cvPageQuery);
