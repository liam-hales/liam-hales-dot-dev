import { ReactElement } from 'react';
import { Page, SearchVariables, skillsPageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps, AsyncComponent } from '../../../types';
import { buildPageMetadata } from '../../../helpers/server';
import Skills from './skills';

/**
 * The entry point for the CV skills page route `/cv/skills`, used to fetch the required
 * data and render the `Skills` component passing said data as props
 *
 * @param props The component props
 * @returns The `SkillsPage` component
 */
const SkillsPage: AsyncComponent<PageProps> = async ({ searchParams }): Promise<ReactElement<PageProps>> => {

  const { search } = await searchParams ?? {};
  const { content } = await useQuery<Page<'skills'>, SearchVariables>(skillsPageQuery, {
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
export const generateMetadata = buildPageMetadata(skillsPageQuery);
