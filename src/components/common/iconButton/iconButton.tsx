import { FunctionComponent, ReactElement } from 'react';
import { IconId } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledIconButton, StyledIcon } from './iconButton.styled';

/**
 * The `IconButton` component props
 */
interface Props extends BaseProps {
  readonly id: IconId;
  readonly onClick: () => void;
}

/**
 * The common `IconButton` component used to
 * render an icon button to perform an action
 *
 * @param props The component props
 * @returns The `IconButton` component
 */
const IconButton: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    id,
    onClick,
  } = props;

  return (
    <StyledIconButton
      className={className}
      color="primary"
      size="medium"
      onClick={onClick}
    >
      <StyledIcon id={id} />
    </StyledIconButton>
  );
};

export default IconButton;
