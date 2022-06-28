import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { StyledTitle, StyledFullStop } from './title.styled';

/**
 * The `Title` component props
 */
type Props = BaseProps;

/**
 * Renders the title text followed by a trailing full stop
 * set in a slightly larger font size in the primary colour
 *
 * @param props The component props
 * @returns The `Title` component
 */
const Title: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <StyledTitle
      className={className}
      bold={true}
    >
      {children}
      <StyledFullStop bold={true}>
        .
      </StyledFullStop>
    </StyledTitle>
  );
};

export default Title;
