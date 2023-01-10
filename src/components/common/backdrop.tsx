/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Backdrop as MuiBackdrop, css } from '@mui/material';
import { BaseProps } from '../../types';

/**
 * The `Backdrop` component props
 */
interface Props extends BaseProps {
  readonly isOpen: boolean;
  readonly children: ReactNode;
}

/**
 * Renders a backdrop used to dim
 * and blur content
 *
 * @param props The component props
 * @returns The `Backdrop` component
 */
const Backdrop: FunctionComponent<Props> = ({ isOpen, children }): ReactElement<Props> => {
  return (
    <MuiBackdrop
      open={isOpen}
      css={css`
        backdrop-filter: blur(4px);
        z-index: 2;
      `}
    >
      {children}
    </MuiBackdrop>
  );
};

export default Backdrop;
