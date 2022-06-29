import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, BoxJustify, IconId, TextAppearance } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box } from '../../common';
import { StyledCard, StyledDescription, StyledIcon, StyledTitle } from './skillAreas.styled';

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

  const { frontendText, backendText, designText } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <Box
      className={className}
      direction={BoxDirection.ROW}
      justify={BoxJustify.SPACE_BETWEEN}
    >
      <StyledCard>
        <StyledIcon id={IconId.CODE} />
        <StyledTitle bold={true}>
          Frontend
        </StyledTitle>
        <StyledDescription appearance={TextAppearance.SECONDARY}>
          {frontendText}
        </StyledDescription>
      </StyledCard>
      <StyledCard>
        <StyledIcon id={IconId.SERVER} />
        <StyledTitle bold={true}>
          Backend
        </StyledTitle>
        <StyledDescription appearance={TextAppearance.SECONDARY}>
          {backendText}
        </StyledDescription>
      </StyledCard>
      <StyledCard>
        <StyledIcon id={IconId.PAINT_FILL} />
        <StyledTitle bold={true}>
          Design
        </StyledTitle>
        <StyledDescription appearance={TextAppearance.SECONDARY}>
          {designText}
        </StyledDescription>
      </StyledCard>
    </Box>
  );
};

export default SkillAreas;
