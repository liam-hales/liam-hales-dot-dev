import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { Grid, SkillAreaCard } from '..';
import { Skill } from '../../graphql';

/**
 * The `SkillAreas` component props
 */
interface Props extends BaseProps {
  readonly frontend: {
    readonly text: string;
    readonly skills: Skill[];
  };
  readonly backend: {
    readonly text: string;
    readonly skills: Skill[];
  };
  readonly design: {
    readonly text: string;
    readonly skills: Skill[];
  };
}

/**
 * Renders the skill areas section for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `SkillAreas` component
 */
const SkillAreas: FunctionComponent<Props> = ({ className, frontend, backend, design }): ReactElement<Props> => {
  return (
    <Grid className={className}>
      <SkillAreaCard
        title="Frontend"
        description={frontend.text}
        skills={frontend.skills}
      />
      <SkillAreaCard
        title="Backend"
        description={backend.text}
        skills={backend.skills}
      />
      <SkillAreaCard
        title="Design"
        description={design.text}
        skills={design.skills}
      />
    </Grid>
  );
};

export default SkillAreas;
