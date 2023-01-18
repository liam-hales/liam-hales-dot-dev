/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Tab as MuiTab, css } from '@mui/material';
import { BaseProps } from '../../../types';
import { ColourPalette } from '../../../enums';
import { Link, Text } from '..';

/**
 * The `Tab` component props
 */
interface Props extends BaseProps {
  readonly value: string;
  readonly href?: string;
  readonly onClick?: () => void;
  readonly children: string;
}

/**
 * The common `Tab` component used to render
 * a single tab for the `Tabs` component
 *
 * @param props The component props
 * @returns The `Tab` component
 */
const Tab: FunctionComponent<Props> = ({ value, href, onClick, children }): ReactElement<Props> => {
  return (
    <MuiTab
      component={(href != null) ? Link : 'button'}
      value={value}
      href={href}
      label={(
        <Text isBold={true}>
          {children}
        </Text>
      )}
      onClick={onClick}
      css={css`
        border-radius: 10px;
        opacity: 1.0;

        .MuiTouchRipple-root {
          color: ${ColourPalette.WHITE};
          border-radius: 24px;
        };
      `}
    />
  );
};

export default Tab;
