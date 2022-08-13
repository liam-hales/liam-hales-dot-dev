import { FunctionComponent, ReactElement } from 'react';
import { TextElement } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledText, StyledFullStop } from './title.styled';

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
    <StyledText
      className={className}
      bold={true}
      element={TextElement.H2}
    >
      {children}
      <StyledFullStop bold={true}>
        .
      </StyledFullStop>
    </StyledText>
  );
};

export default Title;
