/** @jsxImportSource @emotion/react */

import { ClickAwayListener, Tooltip, css } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { Text } from '.';

/**
 * The `Popover` component props
 */
interface Props extends BaseProps<ReactElement, true> {
  readonly text: string;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

/**
 * The common `popover` component used to display
 * a text popover above another component
 *
 * @param props The component props
 * @returns The `Popover` component
 */
const Popover: FunctionComponent<Props> = ({ text, isOpen, onClose, children }): ReactElement<Props> => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Tooltip
        title={(
          <Text
            isBold={true}
            css={css`
              font-size: 10px;
            `}
          >
            {text}
          </Text>
        )}
        open={isOpen}
        placement="top"
        arrow={true}
        disableFocusListener={true}
        disableHoverListener={true}
        disableTouchListener={true}
        PopperProps={{
          disablePortal: true,
        }}
      >
        {/**
         * The `div` element is here to accept the props from `Tooltip` component in
         * order to function correctly as the child component may not accept said props
         */}
        <div>
          {children}
        </div>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default Popover;
