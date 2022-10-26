import { ClickAwayListener, Tooltip } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { StyledText } from './popover.styled';

/**
 * The `Popover` component props
 */
interface Props extends BaseProps<ReactElement, true> {
  readonly text: string;
  readonly open: boolean;
  readonly onClose: () => void;
}

/**
 * The common `popover` component used to display
 * a text popover above another component
 *
 * @param props The component props
 * @returns The `Popover` component
 */
const Popover: FunctionComponent<Props> = ({ text, open, onClose, children }): ReactElement<Props> => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Tooltip
        title={(
          <StyledText bold={true}>
            {text}
          </StyledText>
        )}
        open={open}
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
