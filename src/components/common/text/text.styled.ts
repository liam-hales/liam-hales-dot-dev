import styled from 'styled-components';
import { Typography as MuiTypography } from '@mui/material';
import { ColourPalette, TextAppearance } from '../../../enums';

/**
 * The `StyledTypography` component props
 */
interface StyledTypographyProps {
  readonly appearance: TextAppearance;
  readonly bold: boolean;
  readonly italic: boolean;
}

/**
 * The text colour map for the dfferent
 * `TextAppearance` values
 */
const textColourMap: Record<TextAppearance, ColourPalette> = {
  [TextAppearance.PRIMARY]: ColourPalette.WHITE,
  [TextAppearance.SECONDARY]: ColourPalette.GREY,
  [TextAppearance.SUBTLE]: ColourPalette.GREY,
};

/**
 * The styled `Typography` component from `@mui/material`
 * used for the `Text` component
 */
export const StyledTypography = styled(MuiTypography)<StyledTypographyProps>`
  display: inline;
  font-weight: ${(props) => (props.bold === true) ? 800 : 400};
  font-style: ${(props) => (props.italic === true) ? 'italic' : 'normal'};
  color: ${(props) => textColourMap[props.appearance]};
  opacity: ${(props) => ((props.appearance === TextAppearance.SUBTLE) ? 0.48 : 1)};
  text-transform: none;
  font-size: 14px;
`;
