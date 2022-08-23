import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection } from '../../enums';
import { BaseProps } from '../../types';
import { Box } from '../common';
import { StyledText, StyledValue } from './stat.styled';

/**
 * The `Stat` component props
 */
interface Props extends BaseProps {
  value: number;
  text: string;
}

/**
 * Used to display a stat and render
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
      <StyledValue bold={true}>
        {value}
      </StyledValue>
      <StyledText bold={true}>
        {text}
      </StyledText>
    </Box>
  );
};

export default Stat;