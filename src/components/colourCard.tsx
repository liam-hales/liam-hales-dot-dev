/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Box, Popover, Text } from './common';

/**
 * The `ColourCard` component props
 */
interface Props extends BaseProps {
  readonly colour: ColourPalette;
}

/**
 * Renders the colour card and allows the user
 * to copy the `colour` value to their clipboard
 *
 * @param props The component props
 * @returns The `ColourCard` component
 */
const ColourCard: FunctionComponent<Props> = ({ colour }): ReactElement<Props> => {

  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  return (
    <Box
      alignment="flex-end"
      justify="flex-end"
      css={css`
        height: 100px;
        padding-right: 16px;
        padding-bottom: 8px;
        border-radius: 12px;
        background-color: ${colour};

        ${(colour === ColourPalette.GREY_900) && css`
          border-style: solid;
          border-width: 2px;
          border-color: ${ColourPalette.GREY_800};
        `}
      `}
    >
      <Popover
        text="Coppied"
        isOpen={popoverOpen}
        colour={
          (colour === ColourPalette.BLUE)
            ? ColourPalette.WHITE
            : ColourPalette.BLUE
        }
        onClose={() => setPopoverOpen(false)}
      >
        <Text
          isMono={true}
          isBold={true}
          colour={
            (colour === ColourPalette.WHITE)
              ? ColourPalette.GREY_900
              : ColourPalette.WHITE
          }
          onClick={() => {
            setPopoverOpen(true);
            navigator.clipboard.writeText(colour);
          }}
          css={css`
            font-size: 16px;
          `}
        >
          {colour}
        </Text>
      </Popover>
    </Box>
  );
};

export default ColourCard;
