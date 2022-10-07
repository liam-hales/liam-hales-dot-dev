import { styled } from '@mui/material';
import { Button, Text } from '../../common';
import { Grid } from '../..';
import { ScreenSize } from '../../../enums';

/**
 * The `StyledButton` component props
 */
interface StyledButtonProps {
  readonly screenSize: ScreenSize;
}

/**
 * The styled `Text` component used for
 * the `SkillsPreview` component description text
 */
export const StyledDescription = styled(Text)`
  padding-top: 16px;
`;

/**
 * The styled `Grid` component used for
 * the `SkillsPreview` component skills grid
 */
export const StyledGrid = styled(Grid)`
  width: 100%;
  padding-top: 46px;
  mask-image: linear-gradient(
    to bottom,
    black 36%,
    transparent 100%
  );
`;

/**
 * The styled `Button` component used for the
 * `SkillsPreview` component see more button
 */
export const StyledButton = styled(Button)<StyledButtonProps>`
  margin-top: ${(props) => (props.screenSize === ScreenSize.EXTRA_SMALL) ? -26 : 10}px;
  align-self: center;
`;
