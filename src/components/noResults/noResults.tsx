import { FunctionComponent, ReactElement } from 'react';
import { Title, Text, Box } from '../common';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { StyledText } from './noResults.styled';

/**
 * The `NoResults` component props
 */
interface Props extends BaseProps {
  readonly searchText: string;
}

/**
 * Used to display to the user that
 * no search results were found
 *
 * @returns The `NoResults` component
 */
const NoResults: FunctionComponent<Props> = ({ className, searchText }): ReactElement<Props> => {
  return (
    <Box className={className}>
      <Title>
        No Results
      </Title>
      <StyledText colour={ColourPalette.LIGHT_GREY}>
        No search results found for
        {' '}
        <Text bold={true}>
          {`"${searchText}"`}
        </Text>
        . Try searching for something else
      </StyledText>
    </Box>
  );
};

export default NoResults;
