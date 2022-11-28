/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { Backdrop as MuiBackdrop, css } from '@mui/material';
import { BaseProps } from '../../types';

/**
 * The `Backdrop` component props
 */
interface Props extends BaseProps {
  readonly open: boolean;
}

/**
 * Renders a backdrop used to dim
 * and blur content
 *
 * @param props The component props
 * @returns The `Backdrop` component
 */
const Backdrop: FunctionComponent<Props> = ({ open, children }): ReactElement<Props> => {
  return (
    <MuiBackdrop
      open={open}
      css={css`
        backdrop-filter: blur(4px);
      `}
    >
      {children}
    </MuiBackdrop>
  );
};

export default Backdrop;
