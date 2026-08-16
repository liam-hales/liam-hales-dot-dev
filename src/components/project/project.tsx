/* eslint-disable @typescript-eslint/naming-convention */

import { FunctionComponent, ReactElement } from 'react';
import { z } from 'zod';
import { projectSchema } from '../../schemas';
import { BaseProps } from '../../types';
import { ProjectCard } from '../';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

/**
 * The `Project` component props
 */
type Props = z.infer<typeof projectSchema> & BaseProps;

/**
 * Used to render a single project rendered
 * within the `Projects` component
 *
 * @param props The component props
 * @returns The `Project` component
 */
const Project: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const { className, title, description, status, type, startDate, endDate, repoUrl, liveUrl, bullets } = props;

  /**
   * The map between the project
   * type and the icon
   */
  const typeIconMap: Record<Props['type'], IconName> = {
    'web-app': 'mouse-pointer-2',
    'cli': 'square-terminal',
  };

  /**
   * The map between the project
   * type and the text
   */
  const typeTextMap: Record<Props['type'], string> = {
    'web-app': 'Web app',
    'cli': 'Command-line interface',
  };

  return (
    <div className={`${className ?? ''} w-full flex flex-col items-start gap-y-4`}>
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-content-primary text-xl">
          {title}
          {
            (liveUrl != null) && (
              <span className="font-normal text-content-secondary text-lg">
                {` — ${liveUrl}`}
              </span>
            )
          }
        </h3>
        <p className="font-mono text-content-secondary text-xs opacity-80">
          {status}
        </p>
      </div>
      <div className="flex flex-row items-center gap-x-3">
        <p className="font-mono font-light text-white text-[11px] bg-accent rounded-md px-2 py-1">
          {`${startDate} — ${endDate}`}
        </p>
        <div className="flex flex-row items-center gap-x-2 border border-solid border-outline bg-surface-mid rounded-md px-2 py-1">
          <DynamicIcon
            className="text-content-secondary"
            name={typeIconMap[type]}
            size={12}
          />
          <p className="font-mono font-light text-content-secondary text-[11px]">
            {typeTextMap[type]}
          </p>
        </div>
      </div>
      <p className="text-content-primary">
        {description}
      </p>
      <ProjectCard url={repoUrl} />
      <ul className="list-disc pl-4 marker:text-content-secondary">
        {
          bullets.map((bullet, index) => {
            return (
              <li
                className="text-content-primary pl-1"
                key={`project-bullet-${index}`}
              >
                {bullet}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Project;
