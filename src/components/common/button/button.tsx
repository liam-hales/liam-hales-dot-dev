import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { Text } from '..';
import { StyledButton } from './button.styled';

/**
 * The `Button` component props
 */
interface Props extends BaseProps<string> {
  readonly onClick: () => void;
}

/**
 * The common `Button` component used to
 * render a button to perform an action
 *
 * @param props The component props
 * @returns The `Button` component
 */
const Button: FunctionComponent<Props> = ({ className, onClick, children }): ReactElement<Props> => {
  return (
    <StyledButton
      className={className}
      variant="contained"
      disableElevation={true}
      onClick={onClick}
    >
      <Text bold={true}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
