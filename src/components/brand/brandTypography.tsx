/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box, Text, Title } from '../common';
import { withRef } from '../../helpers';

/**
 * The `BrandTypography` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
}

/**
 * Renders the brand logo section for the brand page which
 * is rendered within the `BrandRoute` component
 *
 * @param props The component props
 * @returns The `BrandTypography` component
 */
const BrandTypography: FunctionComponent<Props> = ({ internalRef, className, text }): ReactElement<Props> => {
  return (
    <Box
      ref={internalRef}
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Typography
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
      <Text css={css`
        font-size: 28px;
      `}
      >
        Urbanist SemiBold 600
      </Text>
      <Text
        isItalic={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist SemiBold 600 Italic
      </Text>
      <Text
        isBold={true}
        css={css`
          padding-top: 18px;
          font-size: 28px;
        `}
      >
        Urbanist Black 900
      </Text>
      <Text
        isBold={true}
        isItalic={true}
        css={css`
          font-size: 28px;
        `}
      >
        Urbanist Black 900 Italic
      </Text>
      <Text
        isMono={true}
        css={css`
          padding-top: 18px;
          font-size: 28px;
        `}
      >
        Fira Code Regular 400
      </Text>
      <Text
        isMono={true}
        isBold={true}
        css={css`
          font-size: 28px;
        `}
      >
        Fira Code SemiBold 600
      </Text>
    </Box>
  );
};

export default withRef(BrandTypography);
