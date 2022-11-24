/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxDirection, ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Box, Text } from './common';

/**
 * The `Stat` component props
 */
interface Props extends BaseProps {
  readonly value: number;
  readonly text: string;
}

/**
 * Used to render a stat and display
 * it's value and description text
 *
 * @param props The component props
 * @returns The `Stat` component
 */
const Stat: FunctionComponent<Props> = ({ className, value, text }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      direction={BoxDirection.ROW}
    >
      <Text
        bold={true}
        colour={ColourPalette.BLUE}
        css={css`
          font-size: 56px;
        `}
      >
        {value}
      </Text>
      <Text
        bold={true}
        css={css`
          max-width: 90px;
          padding-left: 10px;
        `}
      >
        {text}
      </Text>
    </Box>
  );
};

export default Stat;