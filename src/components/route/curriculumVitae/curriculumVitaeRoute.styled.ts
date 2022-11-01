import { styled } from '@mui/material';
import { CurrentPosition, LifeTimelinePreview, SkillsPreview } from '../..';
import { Box, Text } from '../../common';

/**
 * The styled `Box` component used for the
 * `CurriculumVitaeRoute` component header buttons
 */
export const StyledHeaderButtons = styled(Box)`
  column-gap: 12px;
`;

/**
 * The styled `CurrentPosition` component used
 * for the `CurriculumVitaeRoute` component
 */
export const StyledCurrentPosition = styled(CurrentPosition)`
  // Margin is applied here and not padding so
  // the auto scroll works correctly
  margin-top: 50px;
`;

/**
 * The styled `SkillsPreview` component used
 * for the `CurriculumVitaeRoute` component
 */
export const StyledSkillsPreview = styled(SkillsPreview)`
  // Margin is applied here and not padding so
  // the auto scroll works correctly
  margin-top: 70px;
`;

/**
 * The styled `LifeTimelinePreview` component used
 * for the `CurriculumVitaeRoute` component
 */
export const StyledLifeTimelinePreview = styled(LifeTimelinePreview)`
  // Margin is applied here and not padding so
  // the auto scroll works correctly
  margin-top: 80px;
`;

/**
 * The styled `Text` component used for
 * the `CurriculumVitaeRoute` disclaimer text
 */
export const StyledDisclaimerText = styled(Text)`
  max-width: 500px;
  padding-top: 65px;
  font-size: 12px;
  text-align: center;
`;
