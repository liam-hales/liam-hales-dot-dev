import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { StyledGrid } from './grid.styled';

/**
 * The `Grid` component props
 */
type Props = BaseProps<ReactElement[], true>;

/**
 * Used to render the `children` in an evenly
 * spaced out grid grid using flexbox
 *
 * @param props The component props
 * @returns The `Grid` component
 */
const Grid: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <StyledGrid className={className}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
