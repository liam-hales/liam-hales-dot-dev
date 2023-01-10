/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BoxAlignment, BoxDirection, ColourPalette, ScreenSize } from '../enums';
import { useDate, useScreen } from '../hooks';
import { BaseProps } from '../types';
import { Asset } from '../graphql';
import { Box, Image, Text, Title } from './common';
import { Stat } from '.';

/**
 * The `AboutMe` component props
 */
interface Props extends BaseProps {
  readonly text: string;
  readonly meImage: Asset;
  readonly careerStartDate: string;
}

/**
 * Renders the about me section for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `AboutMe` component
 */
const AboutMe: FunctionComponent<Props> = ({ className, text, meImage, careerStartDate }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { utc } = useDate();

  // Calculate the years programming and
  // experience from the career start date
  const yearsExperience = utc().diff(careerStartDate, 'years');
  const yearsProgramming = yearsExperience + 2;

  return (
    <Box
      className={className}
      direction={BoxDirection.ROW}
      alignment={BoxAlignment.START}
    >
      {
        (screenSize !== ScreenSize.SMALL) && (
          <Image
            path={meImage.url}
            alt="Liam Hales"
            css={css`
              width: 116px;
              height: 116px;
              border-radius: 50%;
              margin-top: 16px;
              margin-right: 40px;
              flex-shrink: 0;
            `}
          />
        )
      }
      <Box alignment={BoxAlignment.START}>
        <Title>
          About me
        </Title>
        <Text
          colour={ColourPalette.GREY_400}
          css={css`
            padding-top: 16px;
            padding-bottom: 10px;
          `}
        >
          {text.replace(/yearsProgramming/g, yearsProgramming.toString())}
        </Text>
        <Box direction={BoxDirection.ROW}>
          <Stat
            value={yearsProgramming}
            text="Years Of Programming"
            css={css`
              padding-right: 42px;
            `}
          />
          <Stat
            value={yearsExperience}
            text="Years Of Experience"
            css={css`
              padding-right: 42px;
            `}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
