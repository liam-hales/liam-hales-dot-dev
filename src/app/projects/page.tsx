import { ReactElement } from 'react';
import { PageProps, AsyncComponent } from '../../types';
import Projects from './projects';

/**
 * The entry point for the projects page route `/projects`, used to fetch the required
 * data and render the `Projects` component passing said data as props
 *
 * @returns The `ProjectsPage` component
 */
const ProjectsPage: AsyncComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {
  return (
    <Projects />
  );
};

export default ProjectsPage;
