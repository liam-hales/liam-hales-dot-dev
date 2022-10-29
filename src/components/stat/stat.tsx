import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Box } from '../common';
import { StyledText, StyledValue } from './stat.styled';

/**
 * The `Stat` component props
 */
interface Props extends BaseProps {
  readonly value: number;
  readonly text: string;
}

/**
 * Used to render a stat and display
 * it's value and description text
 *
 * @param props The component props
 * @returns The `Stat` component
 */
const Stat: FunctionComponent<Props> = ({ className, value, text }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      direction={BoxDirection.ROW}
    >
      <StyledValue
        bold={true}
        colour={ColourPalette.BLUE}
      >
        {value}
      </StyledValue>
      <StyledText bold={true}>
        {text}
      </StyledText>
    </Box>
  );
};

export default Stat;
