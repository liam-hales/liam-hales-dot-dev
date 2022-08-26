import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, BoxJustify } from '../../enums';
import { useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { StyledBox, StyledChildBox } from './grid.styled';

/**
 * The `Grid` component props
 */
interface Props extends BaseProps {
  children: ReactElement[];
}

/**
 * Used to render the `children` in an evenly
 * spaced out grid grid using flexbox
 *
 * @param props The component props
 * @returns The `Grid` component
 */
const Grid: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <StyledBox
      className={className}
      direction={BoxDirection.ROW}
      justify={BoxJustify.SPACE_BETWEEN}
      wrap={true}
    >
      {
        children.map((child, index) => {
          return (
            <StyledChildBox
              key={`grid-item-${index}`}
              screenSize={screenSize}
            >
              {child}
            </StyledChildBox>
          );
        })
      }
    </StyledBox>
  );
};

export default Grid;
