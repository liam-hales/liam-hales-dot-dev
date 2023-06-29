/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { withRef } from '../helpers';
import { Employment } from '../graphql';
import { Box, Text, Title, Button, Link } from './common';
import { Employments } from '.';

/**
 * The `ExperiencePreview` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
  readonly employments: Employment[];
}

/**
 * Renders the experience preview section for the CV page
 * which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `ExperiencePreview` component
 */
const ExperiencePreview: FunctionComponent<Props> = ({ internalRef, className, text, employments }): ReactElement<Props> => {
  return (
    <Box
      ref={internalRef}
      className={className}
      alignment="flex-start"
    >
      <Title>
        Professional Experience
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
        `}
      >
        {text}
      </Text>
      <Employments
        data={employments}
        css={css`
          padding-top: 46px;
          mask-image: linear-gradient(
            to bottom,
            black 30%,
            transparent 98%
          );
        `}
      />

      <Link
        href="/cv/experience"
        passHref={true}
        css={css`
          margin-top: -12px;
          align-self: center;
        `}
      >
        <Button
          size="large"
          iconId="arrowRight"
        >
          See all experience
        </Button>
      </Link>
    </Box>
  );
};

export default withRef(ExperiencePreview);
