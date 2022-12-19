/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, BoxJustify, ColourPalette } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Text, Title } from '../common';
import { Grid } from '..';

/**
 * The `BrandColourPalette` component props
 */
type Props = BaseProps;

/**
 * Renders the brand colour palette section for the brand page
 * which is rendered within the `BrandRoute` component
 *
 * @param props The component props
 * @returns The `BrandColourPalette` component
 */
const BrandColourPalette: FunctionComponent<Props> = ({ reference, className }): ReactElement<Props> => {

  const { colourPaletteText } = usePageContent({
    slug: PageSlug.BRAND,
  });

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
        {colourPaletteText}
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
                <Box
                  key={`colour-palette-item-${index}`}
                  alignment={BoxAlignment.END}
                  justify={BoxJustify.END}
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
                  <Text
                    isMono={true}
                    isBold={true}
                    colour={
                      (colour === ColourPalette.WHITE)
                        ? ColourPalette.GREY_900
                        : ColourPalette.WHITE
                    }
                    css={css`
                      font-size: 20px;
                    `}
                  >
                    {colour}
                  </Text>
                </Box>
              );
            })
        }
      </Grid>
    </Box>
  );
};

export default BrandColourPalette;
