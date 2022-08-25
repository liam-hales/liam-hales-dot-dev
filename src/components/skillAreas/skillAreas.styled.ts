import { styled } from '@mui/material';
import { SkillAreaCard } from '..';
import { ScreenSize } from '../../enums';

/**
 * The `StyledCard` component props
 */
interface StyledCardProps {
  screenSize: ScreenSize;
}

/**
 * The card width map for the dfferent
 * `ScreenSize` values
 */
const cardWidthMap: Record<ScreenSize, string> = {
  [ScreenSize.EXTRA_SMALL]: '100%',
  [ScreenSize.SMALL]: 'calc((100% / 2) - 7.5px)',
  [ScreenSize.MEDIUM]: 'calc((100% / 2) - 7.5px)',
  [ScreenSize.LARGE]: 'calc((100% / 3) - 10px)',
  [ScreenSize.EXTRA_LARGE]: 'calc((100% / 3) - 10px)',
};

/**
 * The styled `SkillAreaCard` component used for
 * the `SkillAreas` component
 */
export const StyledCard = styled(SkillAreaCard)<StyledCardProps>`
  width: ${(props) => cardWidthMap[props.screenSize]};
  margin-top: 7.5px;
  margin-bottom: 7.5px;
`;
