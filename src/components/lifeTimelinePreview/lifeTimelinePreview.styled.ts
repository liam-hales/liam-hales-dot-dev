import { styled } from '@mui/material';
import { Button, Text, Timeline } from '../common';

/**
 * The styled `Text` component used for
 * the `LifeTimelinePreview` component description text
 */
export const StyledDescription = styled(Text)`
  padding-top: 16px;
`;

/**
 * The styled `Timeline` component used for
 * the `LifeTimelinePreview` component timeline
 */
export const StyledTimeline = styled(Timeline)`
  padding-top: 46px;
  mask-image: linear-gradient(
    to bottom,
    black 50%,
    transparent 100%
  );
`;

/**
 * The styled `Button` component used for the
 * `LifeTimelinePreview` component see mre button
 */
export const StyledButton = styled(Button)`
  margin-left: 26px;
`;
