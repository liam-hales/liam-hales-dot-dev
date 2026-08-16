import { FunctionComponent, ReactElement } from 'react';
import { z } from 'zod';
import { experienceRoleSchema } from '../../schemas';
import { BaseProps } from '../../types';
import { MapPin } from 'lucide-react';

/**
 * The `ExperienceRole` component props
 */
type Props = z.infer<typeof experienceRoleSchema> & BaseProps;

/**
 * Used to render a single experience role rendered
 * within the `Experience` component
 *
 * @param props The component props
 * @returns The `Experience` component
 */
const ExperienceRole: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const { title, type, companyName, location, startDate, endDate, bullets } = props;

  return (
    <div className="w-full flex flex-row items-start gap-x-4">
      <div className="h-full flex flex-col items-center gap-y-2 pt-2.5">
        <div className="shrink-0 size-2.5 bg-accent rounded-full" />
        <div className="w-0.75 h-full bg-outline rounded-full" />
      </div>
      <div className="flex flex-col items-start gap-y-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-content-primary text-xl">
            {title}
            <span className="font-normal text-content-secondary text-lg">
              {` — ${companyName}`}
            </span>
          </h3>
          <p className="font-mono text-content-secondary text-xs opacity-80">
            {type}
          </p>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <p className="font-mono font-light text-white text-[11px] bg-accent rounded-md px-2 py-1">
            {`${startDate} — ${endDate}`}
          </p>
          <div className="flex flex-row items-center gap-x-1 border border-solid border-outline bg-surface-mid rounded-md px-2 py-1">
            <MapPin
              className="text-content-secondary"
              size={11}
            />
            <p className="font-mono font-light text-content-secondary text-[11px]">
              {location}
            </p>
          </div>
        </div>
        <ul className="list-disc pl-4 marker:text-content-secondary">
          {
            bullets.map((bullet, index) => {
              return (
                <li
                  className="text-content-primary pl-1"
                  key={`experience-role-bullet-${index}`}
                >
                  {bullet}
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ExperienceRole;
