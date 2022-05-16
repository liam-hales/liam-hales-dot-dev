import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledBox } from './box.styled';

/**
 * The `Box` component props
 */
interface Props extends BaseProps {
  direction?: BoxDirection;
  alignment?: BoxAlignment;
}

/**
 * The common `Box` component used to layout components
 * rendering them within a flexbox `div` element
 *
 * @param props The component props
 * @returns The `Box` component
 */
const Box: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    direction = BoxDirection.ROW,
    alignment = BoxAlignment.CENTER,
    children,
  } = props;

  return (
    <StyledBox
      direction={direction}
      alignment={alignment}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
