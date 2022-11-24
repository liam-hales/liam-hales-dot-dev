/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import moment from 'moment';
import { BoxAlignment, BoxDirection, ColourPalette } from '../enums';
import { PageSlug } from '../graphql';
import { usePageContent } from '../hooks';
import { BaseProps } from '../types';
import { Box, Text, Title } from './common';
import { Stat } from '.';

/**
 * The `CurrentPosition` component props
 */
type Props = BaseProps;

/**
 * Renders the current position section for the curriculum vitae
 * page which is rendered within the `CurriculumVitaeRoute` component
 *
 * @param props The component props
 * @returns The `CurrentPosition` component
 */
const CurrentPosition: FunctionComponent<Props> = ({ reference, className }): ReactElement<Props> => {

  const { currentPositionText, careerStartDate } = usePageContent({
    slug: PageSlug.CV,
  });

  // Calculate the years in the industry and the number of years
  // at the company I work for from the career start date
  const yearsInIndustry = moment.utc().diff(careerStartDate, 'years');
  const yearsAtCompany = yearsInIndustry - 1;

  return (
    <Box
      reference={reference}
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Current Position
      </Title>
      <Text
        colour={ColourPalette.LIGHT_GREY}
        css={css`
          padding-top: 16px;
          padding-bottom: 10px;
        `}
      >
        {currentPositionText}
      </Text>
      <Box direction={BoxDirection.ROW}>
        <Stat
          value={yearsInIndustry}
          text="Years in the Industry"
          css={css`
            padding-right: 42px;
          `}
        />
        <Stat
          value={yearsAtCompany}
          text="Years at ANS Group"
          css={css`
            padding-right: 42px;
          `}
        />
      </Box>
    </Box>
  );
};

export default CurrentPosition;
