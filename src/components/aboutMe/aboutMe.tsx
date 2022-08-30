import { useMediaQuery, useTheme } from '@mui/material';
import moment from 'moment';
import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection, ImageRoundness, ScreenSize, TextAppearance } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Title } from '../common';
import { StyledMeImage, StyledDescription, StyledStat } from './aboutMe.styled';

/**
 * The `AboutMe` component props
 */
type Props = BaseProps;

/**
 * Renders the about me section for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `AboutMe` component
 */
const AboutMe: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { breakpoints } = useTheme();

  const mediaQuery = breakpoints.up(ScreenSize.MEDIUM);
  const aboveSmall = useMediaQuery(mediaQuery);

  const { meImage } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  const { aboutMeText, careerStartDate } = usePageContent({
    slug: PageSlug.HOME,
  });

  // Calculate the years programming and
  // experience from the career start date
  const yearsExperience = moment.utc().diff(careerStartDate, 'years');
  const yearsProgramming = yearsExperience + 2;

  return (
    <Box
      className={className}
      direction={BoxDirection.ROW}
      alignment={BoxAlignment.START}
    >
      {
        (aboveSmall === true) && (
          <StyledMeImage
            path={meImage.url}
            alt="Liam Hales"
            roundness={ImageRoundness.CIRCLE}
          />
        )
      }
      <Box alignment={BoxAlignment.START}>
        <Title>
          About me
        </Title>
        <StyledDescription appearance={TextAppearance.SECONDARY}>
          {aboutMeText.replace(/yearsProgramming/g, yearsProgramming.toString())}
        </StyledDescription>
        <Box direction={BoxDirection.ROW}>
          <StyledStat
            value={yearsProgramming}
            text="Years Of Programming"
          />
          <StyledStat
            value={yearsExperience}
            text="Years Of Experience"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;