import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { StyledDiv } from './safeArea.styled';

/**
 * The `SafeArea` component props
 */
type Props = BaseProps;

/**
 * Used to wrap the `children` in a `div` that applies the
 * appropriate padding to render within the screen safe area
 *
 * @param props The component props
 * @returns The `SafeArea` component
 */
const SafeArea: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
};

export default SafeArea;
