/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box, Text, Title } from '../common';
import { Grid, ColourCard } from '..';

/**
 * The `BrandColourPalette` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
}

/**
 * Renders the brand colour palette section for the brand page
 * which is rendered within the `BrandRoute` component
 *
 * @param props The component props
 * @returns The `BrandColourPalette` component
 */
const BrandColourPalette: FunctionComponent<Props> = ({ reference, className, text }): ReactElement<Props> => {
  return (
    <Box
      reference={reference}
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Colour Palette
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
          padding-bottom: 36px;
        `}
      >
        {text}
      </Text>
      <Grid css={css`
        width: 100%;
      `}
      >
        {
          Object
            .values(ColourPalette)
            .map((colour, index) => {
              return (
                <ColourCard
                  key={`colour-palette-item-${index}`}
                  colour={colour}
                />
              );
            })
        }
      </Grid>
    </Box>
  );
};

export default BrandColourPalette;
