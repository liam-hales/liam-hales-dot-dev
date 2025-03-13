/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Tabs as MuiTabs } from '@mui/material';
import { css } from '@emotion/react';
import { ColourPalette } from '../../../enums';
import { BaseProps } from '../../../types';
import { Box } from '..';

/**
 * The `Tabs` component props
 */
interface Props extends BaseProps {
  readonly value?: string;
  readonly children: ReactElement[];
}

/**
 * The common `Tabs` component used to
 * render multiple tabs
 *
 * @param props The component props
 * @returns The `Tabs` component
 */
const Tabs: FunctionComponent<Props> = ({ className, value, children }): ReactElement<Props> => {
  return (
    <MuiTabs
      className={className}
      value={value}
      slotProps={{
        indicator: {
          children: (
            <Box css={css`
              height: 100%;
            `}
            >
              <div css={css`
                width: 30px;
                height: 100%;
                border-radius: 2px;
                background-color: ${ColourPalette.BLUE};
              `}
              />
            </Box>
          ),
        },
      }}
      css={css`
        .MuiTabs-indicator {
          height: 4px;
          background-color: transparent;
        }
      `}
    >
      {children}
    </MuiTabs>
  );
};

export default Tabs;
