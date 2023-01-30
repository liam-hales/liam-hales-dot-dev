/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, css } from '@mui/material';
import { BaseProps } from '../../../types';
import { Icon } from '..';

/**
 * The `Breadcrumbs` component props
 */
interface Props extends BaseProps {
  readonly children: ReactElement[];
}

/**
 * Renders breadcrumbs with each child
 * component being a breadcrumb item
 *
 * @param props The component props
 * @returns The `Breadcrumbs` component
 */
const Breadcrumbs: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <MuiBreadcrumbs
      className={className}
      separator={(
        <Icon id="caretRight" />
      )}
      css={css`
        .MuiBreadcrumbs-separator {
          margin-left: 8px;
          margin-right: 6px;
          font-size: 24px;
        };
      `}
    >
      {children}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
