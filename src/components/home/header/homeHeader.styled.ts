import styled from 'styled-components';
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
  height: 100%;
  position: absolute;
  padding: inherit;
  z-index: -3;
`;

/**
 * The styled `Image` component used for the
 * `HomeHeader` component background overlay image
 */
export const StyledOverlayImage = styled(Image)`
  height: 100%;
  position: absolute;
  padding: inherit;
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
  padding-top: 26px;
  padding-left: 6px;
`;

/**
 * The styled `Text` component used for
 * the `HomeHeader` component title text
 */
export const StyledTitle = styled(Text)`
  font-size: 140px;
  line-height: 124px;
  z-index: -2;
`;

/**
 * The styled `Text` component used for
 * the `HomeHeader` component subtitle text
 */
export const StyledSubtitleOne = styled(Text)`
  font-size: 28px;
  line-height: 30px;
`;

/**
 * The styled `Text` component used for
 * the `HomeHeader` component subtitle text
 */
export const StyledSubtitleTwo = styled(Text)`
  font-size: 20px;
  line-height: 30px;
`;

/**
 * The styled `Text` component used for
 * the `HomeHeader` component captured by text
 */
export const StyledCapturedBy = styled(Text)`
  font-size: 11px;
  padding-top: 158px;
  align-self: flex-end;
`;
