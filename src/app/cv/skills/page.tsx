import { ReactElement } from 'react';
import { Page, SearchVariables, skillsPageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks';
import { PageProps, ServerComponent } from '../../../types';
import Skills from './skills';

/**
 * Set the Next.js revalidate to `0` which will make sure this page is always dynamically
 * rendered which is required because this page uses `searchParams`
 *
 * @see https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
 */
export const revalidate = 0;

/**
 * The entry point for the CV skills page route `/cv/skills`, used to fetch the required
 * data and render the `Skills` component passing said data as props
 *
 * @returns The `SkillsPage` component
 */
const SkillsPage: ServerComponent<PageProps> = async ({ searchParams = {} }): Promise<ReactElement<PageProps>> => {

  const { search } = searchParams;
  const { content } = await useQuery<Page<'skills'>, SearchVariables>(skillsPageQuery, {
    variables: {
      search: search ?? '',
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
