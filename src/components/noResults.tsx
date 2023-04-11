/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
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
 * @param props The component props
 * @returns The `NoResults` component
 */
const NoResults: FunctionComponent<Props> = ({ className, searchText }): ReactElement<Props> => {
  return (
    <Box className={className}>
      <Title>
        No Results
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        element="span"
        css={css`
          max-width: 300px;
          padding-top: 16px;
          text-align: center;
        `}
      >
        No search results found for
        {' '}
        <Text
          isBold={true}
          element="span"
        >
          {`"${searchText}"`}
        </Text>
        . Try searching for something else
      </Text>
    </Box>
  );
};

export default NoResults;
