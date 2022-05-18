import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { Box } from '../common';
import { StyledContent } from './content.styled';

/**
 * The `Content` component props
 */
type Props = BaseProps;

/**
 * Used to render the app content center aligned
 * with padding and a max width constraint
 *
 * @param props The component props
 * @returns The `Content` component
 */
const Content: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <Box>
      <StyledContent className={className}>
        {children}
      </StyledContent>
    </Box>
  );
};

export default Content;
