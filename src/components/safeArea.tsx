/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../types';

/**
 * The `SafeArea` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

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
