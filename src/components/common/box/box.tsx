import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection, BoxJustify } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledBox } from './box.styled';

/**
 * The `Box` component props
 */
interface Props extends BaseProps {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
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
    className,
    direction = BoxDirection.COLUMN,
    alignment = BoxAlignment.CENTER,
    justify = BoxJustify.START,
    children,
  } = props;

  return (
    <StyledBox
      className={className}
      direction={direction}
      alignment={alignment}
      justify={justify}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
