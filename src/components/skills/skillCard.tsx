/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box, Card, Text, LogoIcon } from '../common';
import { Skill } from '../../graphql';

/**
 * The `SkillCard` component props
 */
interface Props extends Omit<Skill, 'id' | 'url'>, BaseProps {
  readonly onClick?: () => void;
}

/**
 * Render a skill card used to
 * display the skill information
 *
 * @param props The component props
 * @returns The `SkillCard` component
 */
const SkillCard: FunctionComponent<Props> = ({ className, name, type, iconId, onClick }): ReactElement<Props> => {
  return (
    <Card
      className={className}
      direction="row"
      justify="space-between"
      onClick={onClick}
      css={css`
        width: 100%;
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <Box alignment="flex-start">
        <Text
          isBold={true}
          css={css`
            font-size: 20px;
          `}
        >
          {name}
        </Text>
        <Text colour={ColourPalette.GREY_400}>
          {type}
        </Text>
      </Box>
      <LogoIcon
        id={iconId}
        css={css`
          width: 40px;
          height: 40px;
          margin-left: 20px;
        `}
      />
    </Card>
  );
};

export default SkillCard;
