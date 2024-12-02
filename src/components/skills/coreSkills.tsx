/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { Skill } from '../../graphql';
import { BaseProps } from '../../types';
import { Box, Button, Info, Link, Title } from '../common';
import { Grid, SkillCard } from '..';

/**
 * The `CoreSkills` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly skills: Skill[];
}

/**
 * Renders the core skills section for the CV page
 * which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `CoreSkills` component
 */
const CoreSkills: FunctionComponent<Props> = ({ className, skills }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      alignment="flex-start"
    >
      <Title>
        Core Skills
      </Title>
      <Grid css={css`
        width: 100%;
        padding-top: 20px;
      `}
      >
        {
          skills.map((skill) => {

            // Destructure the skill and return
            // the skill card component
            const { id, name, type, iconId } = skill;
            return (
              <SkillCard
                key={`skill-${id}`}
                name={name}
                type={type}
                iconId={iconId}
              />
            );
          })
        }
      </Grid>
      <Info css={css`
        margin-top: 26px;
        margin-bottom: 20px;
      `}
      >
        These are my core skills I currently use on a day-to-day basis. View all my skills below.
      </Info>
      <Link
        href="/cv/skills"
        passHref={true}
        css={css`
          align-self: center;
        `}
      >
        <Button
          size="medium"
          iconId="arrowRight"
        >
          See all skill
        </Button>
      </Link>
    </Box>
  );
};

export default CoreSkills;
