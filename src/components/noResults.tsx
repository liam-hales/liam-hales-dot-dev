/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../types';
import { ColourPalette } from '../enums';
import { Title, Text, Box } from './common';

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
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          max-width: 300px;
          padding-top: 16px;
          text-align: center;
        `}
      >
        No search results found for
        {' '}
        <Text bold={true}>
          {`"${searchText}"`}
        </Text>
        . Try searching for something else
      </Text>
    </Box>
  );
};

export default NoResults;
