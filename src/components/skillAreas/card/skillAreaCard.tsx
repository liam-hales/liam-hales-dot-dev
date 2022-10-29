import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection, BoxJustify, IconId, ScreenSize, ColourPalette } from '../../../enums';
import { useScreen } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box } from '../../common';
import { StyledCard, StyledIcon, StyledTitle, StyledDescription } from './skillAreaCard.styled';

/**
 * The `SkillAreaCard` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly description: string;
  readonly iconId: IconId;
}

/**
  * Renders the skill area card for
  * the `SkillAreas` component
  *
  * @param props The component props
  * @returns The `SkillAreaCard` component
  */
const SkillAreaCard: FunctionComponent<Props> = ({ className, title, description, iconId }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <StyledCard
      className={className}
      direction={
        (screenSize === ScreenSize.SMALL)
          ? BoxDirection.ROW
          : BoxDirection.COLUMN
      }
      justify={BoxJustify.CENTER}
    >
      <StyledIcon
        id={iconId}
        screenSize={screenSize}
      />
      <Box alignment={
        (screenSize === ScreenSize.SMALL)
          ? BoxAlignment.START
          : BoxAlignment.CENTER
      }
      >
        <StyledTitle
          bold={true}
          screenSize={screenSize}
        >
          {title}
        </StyledTitle>
        <StyledDescription
          colour={ColourPalette.LIGHT_GREY}
          screenSize={screenSize}
        >
          {description}
        </StyledDescription>
      </Box>
    </StyledCard>
  );
};

export default SkillAreaCard;
