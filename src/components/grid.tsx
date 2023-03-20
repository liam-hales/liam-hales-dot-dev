/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../types';

/**
 * The `Grid` component props
 */
interface Props extends BaseProps {
  readonly children: ReactElement[];
}

/**
 * Used to render the `children` in an evenly
 * spaced out grid grid using flexbox
 *
 * @param props The component props
 * @returns The `Grid` component
 */
const Grid: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <div
      className={className}
      css={css`
        display: grid;
        row-gap: 12px;
        column-gap: 12px;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      `}
    >
      {children}
    </div>
  );
};

export default Grid;
