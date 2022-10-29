import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material';
import { ColourPalette } from '../../../enums';

/**
 * The `StyledIcon` component props
 */
interface StyledIconProps {
  readonly colour: ColourPalette;
}

/**
 * The styled `FontAwesomeIcon` component from `@fortawesome/react-fontawesome`
 * used for the `Icon` component
 */
export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  color: ${(props) => props.colour};
`;
