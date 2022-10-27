import { styled } from '@mui/material';
import { Text } from '../..';

/**
 * The `StyledText` component props
 */
interface StyledTextProps {
  active: boolean;
}

/**
 * The styled `Text` component used for
 * the `BreadcrumbItem` component
 */
export const StyledText = styled(Text)<StyledTextProps>`
  font-size: 17px;
  opacity: ${(props) => ((props.active === true) ? 1 : 0.52)};
`;
