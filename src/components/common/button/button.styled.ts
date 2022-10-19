import { styled, Button } from '@mui/material';
import { Icon } from '..';
import { ButtonAppearance, ColourPalette } from '../../../enums';

/**
 * The `StyledButton` component props
 */
interface StyledButtonProps {
  appearance: ButtonAppearance;
}

/**
 * The button colour map for the dfferent
 * `ButtonAppearance` values
 */
const buttonColourMap: Record<ButtonAppearance, ColourPalette> = {
  [ButtonAppearance.PRIMARY]: ColourPalette.BLUE,
  [ButtonAppearance.SECONDARY]: ColourPalette.GREY,
};

/**
 * The styled `Button` component from `@mui/material`
 * used for the `Button` component
 */
export const StyledButton = styled(Button)<StyledButtonProps>`
  border-radius: 1000px;
  background-color: ${(props) => buttonColourMap[props.appearance]};
`;

/**
 * The styled `Icon` component used
 * for the `Button` component icon
 */
export const StyledIcon = styled(Icon)`
  padding-right: 8px;
  font-size: 16px;
  color: ${ColourPalette.WHITE};
`;
