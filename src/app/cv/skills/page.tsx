import { ReactElement } from 'react';
import { Page, SearchVariables, skillsPageQuery } from '../../../graphql';
import { useQuery } from '../../../hooks/server';
import { PageProps, ServerComponent } from '../../../types';
import Skills from './skills';

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
