import { FunctionComponent, ReactElement } from 'react';
import { projectsSchema } from '../../schemas';
import { BaseProps } from '../../types';
import { z } from 'zod';
import { Project } from '../';

/**
 * The `Projects` component props
 */
type Props = z.infer<typeof projectsSchema> & BaseProps;

/**
 * Used to render a collection of projects
 * built using the `Project` component
 *
 * @param props The component props
 * @returns The `Projects` component
 */
const Projects: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const { className, projects } = props;

  return (
    <div className={`${className ?? ''} h-full flex flex-col items-start gap-y-8`}>
      {
        projects.map((project, index) => {
          return (
            <Project
              key={`project-${index}`}
              {...project}
            />
          );
        })
      }
    </div>
  );
};

export default Projects;
