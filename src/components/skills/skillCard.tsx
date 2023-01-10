/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, BoxDirection, BoxJustify, ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box, Card, Image, Text } from '../common';

/**
 * The `SkillCard` component props
 */
interface Props extends BaseProps {
  readonly name: string;
  readonly type: string;
  readonly imageUrl?: string;
  readonly onClick?: () => void;
}

/**
 * Used to render a skill and
 * display it's infomation
 *
 * @param props The component props
 * @returns The `SkillCard` component
 */
const SkillCard: FunctionComponent<Props> = ({ className, name, type, imageUrl, onClick }): ReactElement<Props> => {
  return (
    <Card
      className={className}
      direction={BoxDirection.ROW}
      justify={BoxJustify.SPACE_BETWEEN}
      onClick={onClick}
      css={css`
        width: 100%;
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <Box alignment={BoxAlignment.START}>
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
      {
        (imageUrl != null) && (
          <Image
            path={imageUrl}
            alt={name}
            css={css`
              width: 46px;
              height: 46px;
              margin-left: 20px;
              flex-shrink: 0;
            `}
          />
        )
      }
    </Card>
  );
};

export default SkillCard;
