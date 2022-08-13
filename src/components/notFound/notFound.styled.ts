import { styled } from '@mui/material';
import { Text, Image } from '../common';
import { Content } from '..';

/**
 * The styled `Content` component used for
 * the `NotFound` component content
 */
export const StyledContent = styled(Content)`
  padding-top: 46px;
`;

/**
 * The styled `Text` component used for
 * the `NotFound` component 404 text
 */
export const Styled404 = styled(Text)`
  padding-right: 6px;
  font-size: 110px;
  line-height: 100%;
`;

/**
 * The styled `Text` component used for
 * the `NotFound` component text
 */
export const StyledText = styled(Text)`
  max-width: 320px;
  padding-top: 16px;
  text-align: center;
`;

/**
 * The styled `Image` component used for
 * the `NotFound` component image
 */
export const StyledImage = styled(Image)`
  width: 320px;
  margin-top: 38px;
  margin-Bottom: 38px;
`;
