/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, NavRoute, ColourPalette, IconId, ScreenSize } from '../../enums';
import { Skill } from '../../graphql';
import { useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Button, Link, Text, Title } from '../common';
import { Grid, SkillCard } from '..';

/**
 * The `SkillsPreview` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
  readonly skills: Skill[];
}

/**
 * Renders the skills preview section for the CV page
 * which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `SkillsPreview` component
 */
const SkillsPreview: FunctionComponent<Props> = ({ reference, className, text, skills }): ReactElement<Props> => {

  const { screenSize } = useScreen();
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
        {text}
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
      <Link
        href={NavRoute.SKILLS}
        passHref={true}
        css={css`
          margin-top: ${(screenSize === ScreenSize.SMALL) ? -26 : 10}px;
          align-self: center;
        `}
      >
        <Button iconId={IconId.ARROW_RIGHT}>
          See all skills
        </Button>
      </Link>
    </Box>
  );
};

export default SkillsPreview;
