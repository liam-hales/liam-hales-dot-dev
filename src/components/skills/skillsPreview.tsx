/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, NavRoute, ColourPalette, IconId, ScreenSize } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent, useRouter, useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Button, Text, Title } from '../common';
import { Grid, SkillCard } from '..';

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
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
        `}
      >
        {skillsText}
      </Text>
      <Grid css={css`
        width: 100%;
        padding-top: 46px;
        mask-image: linear-gradient(
          to bottom,
          black 46%,
          transparent 100%
        );
      `}
      >
        {
          skills.map((skill, index) => {

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
      </Grid>
      <Button
        iconId={IconId.ARROW_RIGHT}
        onClick={() => goTo(NavRoute.SKILLS)}
        css={css`
          margin-top: ${(screenSize === ScreenSize.SMALL) ? -26 : 10}px;
          align-self: center;
        `}
      >
        See all skills
      </Button>
    </Box>
  );
};

export default SkillsPreview;
