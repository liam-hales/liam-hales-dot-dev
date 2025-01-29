/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { ClickAwayListener, Tooltip } from '@mui/material';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { Text } from '.';

/**
 * The `Popover` component props
 */
interface Props extends BaseProps {
  readonly text: string;
  readonly isOpen?: boolean;
  readonly colour?: ColourPalette;
  readonly onClose?: () => void;
  readonly children: ReactNode;
}

/**
 * The common `popover` component used to display
 * a text popover above another component
 *
 * @param props The component props
 * @returns The `Popover` component
 */
const Popover: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    text,
    isOpen,
    colour = ColourPalette.BLUE,
    onClose,
    children,
  } = props;

  return (
    <ClickAwayListener onClickAway={() => onClose?.()}>
      <div css={css`
        .MuiTooltip-tooltip {
          max-width: 200px;
          border-radius: 6px;
          background-color: ${colour};
        };

        .MuiTooltip-arrow {
          color: ${colour};
        };
      `}
      >
        <Tooltip
          title={(
            <Text
              isBold={true}
              css={css`
                font-size: 10px;
                color: ${(colour === ColourPalette.WHITE) ? ColourPalette.BLUE : ColourPalette.WHITE};
              `}
            >
              {text}
            </Text>
          )}
          open={isOpen}
          placement="top"
          arrow={true}
          disableFocusListener={(isOpen != null)}
          disableHoverListener={(isOpen != null)}
          disableTouchListener={(isOpen != null)}
          slotProps={{
            popper: {
              disablePortal: true,
            },
          }}
        >
          {
            /**
             * This `div` element is here to accept the props from the `Tooltip` component in
             * order to function correctly as the child component may not accept said props
             */
          }
          <div>
            {children}
          </div>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default Popover;
