import { ReactElement } from 'react';
import { Page, cvPageQuery } from '../../graphql';
import { useQuery } from '../../hooks/server';
import { PageProps, ServerComponent } from '../../types';
import { buildPageMetadata } from '../../helpers/server';
import CV from './cv';

/**
 * The entry point for the CV page route `/cv`, used to fetch the required
 * data and render the `CV` component passing said data as props
 *
 * @returns The `CVPage` component
 */
const CVPage: ServerComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const { content } = await useQuery<Page<'cv'>>(cvPageQuery);
  return (
    <CV content={content} />
  );
};

export default CVPage;
export const generateMetadata = buildPageMetadata(cvPageQuery);
