/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, css } from '@mui/material';
import { BaseProps } from '../../../types';
import { IconId } from '../../../enums';
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
        <Icon id={IconId.CARET_RIGHT} />
      )}
      css={css`
        .MuiBreadcrumbs-separator {
          margin-left: 10px;
          margin-right: 12px;
          font-size: 18px;
        };
      `}
    >
      {children}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
