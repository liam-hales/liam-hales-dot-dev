import { ReactElement } from 'react';
import { Page, PageSlug, SearchVariables, skillsPageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks';
import { PageProps, ServerComponent } from '../../../types';
import Skills from './skills';

/**
 * Set the Next.js revalidate to `0` which will stop caching
 * for this page and force a server request for data every time
 */
export const revalidate = 0;

/**
 * The entry point for the CV skills page route `/cv/skills`, used to fetch the required
 * data and render the `Skills` component passing said data as props
 *
 * @returns The `SkillsPage` component
 */
const SkillsPage: ServerComponent<PageProps> = async ({ searchParams = {} }): Promise<ReactElement<PageProps>> => {

  const { search = '' } = searchParams;
  const { content } = await useQuery<Page<PageSlug.SKILLS>, SearchVariables>(skillsPageQuery, {
    variables: {
      search: search,
    },
  });

  return (
    <Skills
      content={content}
      search={search}
    />
  );
};

export default SkillsPage;
