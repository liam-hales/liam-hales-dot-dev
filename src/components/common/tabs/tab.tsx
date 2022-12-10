/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { Tab as MuiTab, css } from '@mui/material';
import { BaseProps } from '../../../types';
import { ColourPalette } from '../../../enums';
import { Text } from '..';

/**
 * The `Tab` component props
 */
interface Props extends BaseProps<string> {
  readonly value: string;
  readonly onClick: () => void;
}

/**
 * The common `Tab` component used to render
 * a single tab for the `Tabs` component
 *
 * @param props The component props
 * @returns The `Tab` component
 */
const Tab: FunctionComponent<Props> = ({ value, onClick, children }): ReactElement<Props> => {
  return (
    <MuiTab
      value={value}
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
