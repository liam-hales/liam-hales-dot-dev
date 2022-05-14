import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { StyledButton } from './button.styled';

/**
 * The `Button` component props
 */
interface Props extends BaseProps {
  onClick: () => void;
}

/**
 * The common `Button` component used acorss
 * the app to render a button to perform actions
 *
 * @param props The component props
 * @returns The `Button` component
 */
const Button: FunctionComponent<Props> = ({ onClick, children }): ReactElement<Props> => {
  return (
    <StyledButton
      variant="contained"
      disableElevation={true}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
