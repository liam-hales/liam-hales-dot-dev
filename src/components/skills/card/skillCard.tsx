import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection, BoxJustify, ImageRoundness, TextAppearance } from '../../../enums';
import { BaseProps } from '../../../types';
import { Box, Text } from '../../common';
import { StyledCard, StyledName, StyledImage } from './skillCard.styled';

/**
 * The `SkillCard` component props
 */
interface Props extends BaseProps {
  readonly name: string;
  readonly type: string;
  readonly imageUrl?: string;
  readonly onClick?: () => void;
}

/**
 * Used to render a skill and
 * display it's infomation
 *
 * @param props The component props
 * @returns The `SkillCard` component
 */
const SkillCard: FunctionComponent<Props> = ({ className, name, type, imageUrl, onClick }): ReactElement<Props> => {
  return (
    <StyledCard
      className={className}
      direction={BoxDirection.ROW}
      justify={BoxJustify.SPACE_BETWEEN}
      onClick={onClick}
    >
      <Box alignment={BoxAlignment.START}>
        <StyledName bold={true}>
          {name}
        </StyledName>
        <Text appearance={TextAppearance.SECONDARY}>
          {type}
        </Text>
      </Box>
      {
        (imageUrl != null) && (
          <StyledImage
            path={imageUrl}
            alt={name}
            roundness={ImageRoundness.NONE}
          />
        )
      }
    </StyledCard>
  );
};

export default SkillCard;
