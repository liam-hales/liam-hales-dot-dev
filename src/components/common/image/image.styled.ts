import { styled } from '@mui/material';
import { ImageRoundness } from '../../../enums';

/**
 * The `StyledImage` component props
 */
interface StyledImageProps {
  readonly roundness: ImageRoundness;
}

/**
 * The image border radius map for the
 * dfferent `ImageRoundness` values
 */
const borderRadiusMap: Record<ImageRoundness, string> = {
  [ImageRoundness.NONE]: '0px',
  [ImageRoundness.ROUNDED]: '16px',
  [ImageRoundness.CIRCLE]: '50%',
};

/**
 * The styled `img` element used
 * for the `Image` component
 */
export const StyledImage = styled('img')<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => borderRadiusMap[props.roundness]};
`;
