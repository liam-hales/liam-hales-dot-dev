import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, NavRoute, ScreenSize, TextAppearance } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent, useRouter, useScreen } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box, Title } from '../../common';
import { SkillCard } from '../..';
import { StyledDescription, StyledGrid, StyledButton } from './skillsPreview.styled';

/**
 * The `SkillsPreview` component props
 */
type Props = BaseProps;

/**
 * Renders the skills preview section for the curriculum vitae page
 * which is rendered within the `CurriculumVitaeRoute` component
 *
 * @param props The component props
 * @returns The `SkillsPreview` component
 */
const SkillsPreview: FunctionComponent<Props> = ({ reference, className }): ReactElement<Props> => {

  const { goTo } = useRouter();
  const { screenSize } = useScreen();
  const { skillsText, skills } = usePageContent({
    slug: PageSlug.CV,
  });

  return (
    <Box
      reference={reference}
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Skills
      </Title>
      <StyledDescription appearance={TextAppearance.SECONDARY}>
        {skillsText}
      </StyledDescription>
      <StyledGrid>
        {
          skills
            .slice(0, (screenSize === ScreenSize.SMALL) ? -2 : skills.length)
            .map((skill, index) => {

              // Destructure the skill and return
              // the skill card component
              const { name, type, image } = skill;
              return (
                <SkillCard
                  key={`skill-item-${index}`}
                  name={name}
                  type={type}
                  imageUrl={image?.url}
                />
              );
            })
        }
      </StyledGrid>
      <StyledButton
        onClick={() => goTo(NavRoute.SKILLS)}
        screenSize={screenSize}
      >
        See all skills
      </StyledButton>
    </Box>
  );
};

export default SkillsPreview;
