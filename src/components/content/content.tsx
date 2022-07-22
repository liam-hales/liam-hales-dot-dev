import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection } from '../../enums';
import { BaseProps } from '../../types';
import { StyledBox, StyledContent } from './content.styled';

/**
 * The `Content` component props
 */
interface Props extends BaseProps {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment
}

/**
 * Used to render the app content center aligned
 * with padding and a max width constraint
 *
 * @param props The component props
 * @returns The `Content` component
 */
const Content: FunctionComponent<Props> = ({ className, direction, alignment, children }): ReactElement<Props> => {
  return (
    <StyledBox>
      <StyledContent
        className={className}
        direction={direction}
        alignment={alignment}
      >
        {children}
      </StyledContent>
    </StyledBox>
  );
};

export default Content;
