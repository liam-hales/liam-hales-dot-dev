import { styled } from '@mui/material';
import { Content } from '../..';
import { Box, Text, Image } from '../../common';

/**
 * The styled `Content` component used for
 * the `HomeHeader` component outer content
 */
export const StyledOuterContent = styled(Content)`
  position: relative;
  max-width: 960px;
  height: 500px;
`;

/**
 * The styled `Image` component used for the
 * `HomeHeader` component background image
 */
export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: inherit;
  z-index: -3;
`;

/**
 * The styled `Image` component used for the
 * `HomeHeader` component background overlay image
 */
export const StyledOverlayImage = styled(StyledImage)`
  z-index: -1;
`;

/**
 * The styled `Content` component used for
 * the `HomeHeader` component content
 */
export const StyledContent = styled(Content)`
  height: 100%;
  padding-bottom: 20px;
`;

/**
 * The styled `Box` component used for the
 * `HomeHeader` component subtitle box
 */
export const StyledSubtitleBox = styled(Box)`
  padding-top: 22px;
  padding-bottom: 74px;
  padding-left: 6px;
`;

/**
 * The styled `Text` component used for
 * the `HomeHeader` component title text
 */
export const StyledTitle = styled(Text)`
  font-size: clamp(70px, 15vw, 140px);
  line-height: 92%;
  z-index: -2;
`;

/**
 * The styled `Text` component used for
 * the `HomeHeader` component subtitle text
 */
export const StyledSubtitle = styled(Text)`
  height: 140px;
  font-size: clamp(28px, 7vw, 42px);
  line-height: 110%;
`;

/**
 * The styled `Text` component used for
 * the `HomeHeader` component captured by text
 */
export const StyledCapturedBy = styled(Text)`
  font-size: 11px;
  align-self: flex-end;
`;
