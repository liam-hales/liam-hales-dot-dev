import { FunctionComponent, ReactElement } from 'react';
import { experienceSchema } from '../../schemas';
import { BaseProps } from '../../types';
import { z } from 'zod';
import { ExperienceRole } from '../';

/**
 * The `Experience` component props
 */
type Props = z.infer<typeof experienceSchema> & BaseProps;

/**
 * Used to render an experience timeline consisting
 * of a current role and/or previous roles
 *
 * @param props The component props
 * @returns The `Experience` component
 */
const Experience: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const { className, currentRole, previousRoles = [] } = props;

  return (
    <div className={`${className ?? ''} h-full flex flex-col items-start gap-y-8`}>
      {
        (currentRole != null) && (
          <div className="flex flex-col items-start gap-y-4">
            <h4 className="font-mono text-content-secondary text-xs opacity-80">
              Current Role
            </h4>
            <ExperienceRole {...currentRole} />
          </div>
        )
      }
      {
        (previousRoles.length > 0) && (
          <div className="flex flex-col items-start gap-y-4">
            <h4 className="font-mono text-content-secondary text-xs opacity-80">
              {`Previous Role${(previousRoles.length > 1) ? 's' : ''}`}
            </h4>
            <div className="flex flex-col items-start gap-y-8">
              {
                previousRoles.map((role, index) => {
                  return (
                    <ExperienceRole
                      key={`experience-previous-role-${index}`}
                      {...role}
                    />
                  );
                })
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Experience;
