/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box, Card, LogoIcon, Popover, Text, Link } from '../common';
import { Skill } from '../../graphql';

/**
 * The `SkillAreaCard` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly description: string;
  readonly skills: Skill[];
}

/**
 * Renders the skill area card for
 * the `SkillAreas` component
 *
 * @param props The component props
 * @returns The `SkillAreaCard` component
 */
const SkillAreaCard: FunctionComponent<Props> = ({ className, title, description, skills }): ReactElement<Props> => {
  return (
    <Card
      className={className}
      css={css`
        width: 100%;
        padding-top: 22px;
        padding-bottom: 22px;
        padding-left: 26px;
        padding-right: 26px;
      `}
    >
      <Text
        isBold={true}
        css={css`
          padding-bottom: 10px;
          font-size: 20px;
        `}
      >
        {title}
      </Text>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          max-width: 220px;
          text-align: center;
        `}
      >
        {description}
      </Text>
      <Box
        direction="row"
        css={css`
          padding-top: 20px;
          column-gap: 24px;
        `}
      >
        {
          skills.map((skill) => {
            const { id, name, iconId, url } = skill;
            return (
              <Popover
                key={`skill-${id}`}
                text={name}
              >
                <Link
                  href={url}
                  target="_blank"
                  passHref={true}
                  aria-label={name}
                >
                  <LogoIcon
                    id={iconId}
                    css={css`
                      width: 32px;
                      height: 32px;
                    `}
                  />
                </Link>
              </Popover>
            );
          })
        }
      </Box>
    </Card>
  );
};

export default SkillAreaCard;
