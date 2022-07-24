import { styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * The `StyledIcon` component props
 */
interface StyledIconProps {
  readonly clickable: boolean;
}

/**
 * The styled `FontAwesomeIcon` component used
 * for the `Icon` component
 */
export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  cursor: ${(props) => {
    return (props.clickable === true)
      ? 'pointer'
      : 'unset';
  }};
`;
