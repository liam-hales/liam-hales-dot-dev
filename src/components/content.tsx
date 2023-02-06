/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@mui/material';
import { BaseProps, BoxAlignment, BoxDirection, BoxJustify } from '../types';
import { Box } from './common';

/**
 * The `Content` component props
 */
interface Props extends BaseProps {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
  readonly children: ReactNode;
}

/**
 * Used to render the app content center aligned
 * with `padding` and a `max-width` constraint
 *
 * @param props The component props
 * @returns The `Content` component
 */
const Content: FunctionComponent<Props> = ({ className, direction, alignment, justify, children }): ReactElement<Props> => {
  return (
    <Box css={css`
      width: 100%;
      height: 100%;
    `}
    >
      <Box
        className={className}
        direction={direction}
        alignment={alignment}
        justify={justify}
        css={css`
          width: 100%;
          max-width: 800px;
          padding-left: 24px;
          padding-right: 24px;
        `}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Content;
