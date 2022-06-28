import styled from 'styled-components';
import { ColourPalette } from '../../../enums';
import { Box, Text, Image } from '../../common';

/**
 * The styled `Image` component used
 * for the `AboutMe` component
 */
export const StyledMeImage = styled(Image)`
  width: 116px;
  height: 116px;
  margin-top: 16px;
  margin-right: 40px;
  flex-shrink: 0;
`;

/**
 * The styled `Box` component used for
 * the `AboutMe` component facts
 */
export const StyledFactBox = styled(Box)`
  padding-right: 42px;
`;

/**
 * The styled `Text` component used for
 * the `AboutMe` component subtitle text
 */
export const StyledSubtitle = styled(Text)`
  max-width: 100px;
  padding-left: 10px;
`;

/**
 * The styled `Text` component used for
 * the `AboutMe` component description text
 */
export const StyledDescription = styled(Text)`
  padding-top: 8px;
  padding-bottom: 10px;
`;

/**
 * The styled `Text` component used for
 * the `AboutMe` component fact number text
 */
export const StyledFactNumber = styled(Text)`
  font-size: 56px;
  color: ${ColourPalette.BLUE};
`;
