/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../types';

/**
 * The `SafeArea` component props
 */
type Props = BaseProps;

/**
 * Used to wrap the `children` in a `div` that applies the
 * appropriate padding to render within the screen safe area
 *
 * @param props The component props
 * @returns The `SafeArea` component
 */
const SafeArea: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  return (
    <div css={css`
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
      padding-left: env(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
    `}
    >
      {children}
    </div>
  );
};

export default SafeArea;
