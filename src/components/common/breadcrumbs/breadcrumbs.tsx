/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { css } from '@emotion/react';
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
        <Icon
          id="caretRight"
          css={css`
            font-size: 20px;
          `}
        />
      )}
      css={css`
        .MuiBreadcrumbs-separator {
          margin-left: 8px;
          margin-right: 6px;
        };
      `}
    >
      {children}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
