/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { useDate } from '../hooks';
import { withRef } from '../helpers';
import { Box, Text, Title } from './common';
import { Stat } from '.';

/**
 * The `CurrentPosition` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly text: string;
  readonly careerStartDate: string;
}

/**
 * Renders the current position section for the CV
 * page which is rendered within the `CVRoute` component
 *
 * @param props The component props
 * @returns The `CurrentPosition` component
 */
const CurrentPosition: FunctionComponent<Props> = ({ internalRef, className, text, careerStartDate }): ReactElement<Props> => {

  const { utc } = useDate();

  // Calculate the years in the industry and the number of years
  // at the company I work for from the career start date
  const yearsInIndustry = utc().diff(careerStartDate, 'years');
  const yearsAtCompany = yearsInIndustry - 1;

  return (
    <Box
      ref={internalRef}
      className={className}
      alignment="flex-start"
    >
      <Title>
        Current Position
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 16px;
          padding-bottom: 10px;
        `}
      >
        {text}
      </Text>
      <Box direction="row">
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

export default withRef(CurrentPosition);
