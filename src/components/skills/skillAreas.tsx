import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { Grid, SkillAreaCard } from '..';

/**
 * The `SkillAreas` component props
 */
interface Props extends BaseProps {
  readonly frontendText: string;
  readonly backendText: string;
  readonly designText: string;
}

/**
 * Renders the skill areas section for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `SkillAreas` component
 */
const SkillAreas: FunctionComponent<Props> = ({ className, frontendText, backendText, designText }): ReactElement<Props> => {
  return (
    <Grid className={className}>
      <SkillAreaCard
        title="Frontend"
        description={frontendText}
        iconId="code"
      />
      <SkillAreaCard
        title="Backend"
        description={backendText}
        iconId="server"
      />
      <SkillAreaCard
        title="Design"
        description={designText}
        iconId="colourSwatch"
      />
    </Grid>
  );
};

export default SkillAreas;
