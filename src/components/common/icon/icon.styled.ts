import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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
