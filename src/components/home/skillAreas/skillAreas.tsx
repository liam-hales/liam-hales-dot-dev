import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, BoxJustify, IconId, ScreenSize } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent, useScreen } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box } from '../../common';
import { SkillAreaCard } from '../..';

/**
 * The `SkillAreas` component props
 */
type Props = BaseProps;

/**
 * Renders the skill areas section for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `SkillAreas` component
 */
const SkillAreas: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { frontendText, backendText, designText } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <Box
      className={className}
      direction={BoxDirection.ROW}
      justify={
        (screenSize === ScreenSize.EXTRA_SMALL)
          ? BoxJustify.CENTER
          : BoxJustify.SPACE_BETWEEN
      }
      wrap={true}
    >
      <SkillAreaCard
        title="Frontend"
        description={frontendText}
        iconId={IconId.CODE}
      />
      <SkillAreaCard
        title="Backend"
        description={backendText}
        iconId={IconId.SERVER}
      />
      <SkillAreaCard
        title="Design"
        description={designText}
        iconId={IconId.PAINT_FILL}
      />
    </Box>
  );
};

export default SkillAreas;
