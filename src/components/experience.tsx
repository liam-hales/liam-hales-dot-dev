/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { withRef } from '../helpers';
import { Box, Link, Text, Title, Button } from './common';

/**
 * The `Experience` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
}

/**
 * Renders the experience section for the CV page
 * which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `Experience` component
 */
const Experience: FunctionComponent<Props> = ({ internalRef, className, text }): ReactElement<Props> => {
  return (
    <Box
      ref={internalRef}
      className={className}
      alignment="flex-start"
    >
      <Title>
        Experience
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
          padding-bottom: 32px;
        `}
      >
        {text}
      </Text>
      <Link
        href="/blog"
        passHref={true}
        css={css`
          align-self: center;
        `}
      >
        <Button
          size="large"
          iconId="message"
        >
          Visit my Blog
        </Button>
      </Link>
    </Box>
  );
};

export default withRef(Experience);
