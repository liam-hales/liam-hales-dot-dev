import moment from 'moment';
import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection, TextAppearance } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box } from '../../common';
import {
  StyledDescription,
  StyledFactBox,
  StyledFactNumber,
  StyledMeImage,
  StyledSubtitle,
  StyledTitle,
} from './aboutMe.styled';

/**
 * The `AboutMe` component props
 */
type Props = BaseProps;

/**
 * Renders the about me section of the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `AboutMe` component
 */
const AboutMe: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

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
      <StyledMeImage
        path={meImage.url}
        alt="Liam Hales"
        circle={true}
      />
      <Box alignment={BoxAlignment.START}>
        <StyledTitle bold={true}>
          About me.
        </StyledTitle>
        <StyledDescription appearance={TextAppearance.SECONDARY}>
          {aboutMeText}
        </StyledDescription>
        <Box direction={BoxDirection.ROW}>
          <StyledFactBox direction={BoxDirection.ROW}>
            <StyledFactNumber bold={true}>
              {yearsProgramming}
            </StyledFactNumber>
            <StyledSubtitle bold={true}>
              Years Of Programming
            </StyledSubtitle>
          </StyledFactBox>
          <StyledFactBox direction={BoxDirection.ROW}>
            <StyledFactNumber bold={true}>
              {yearsExperience}
            </StyledFactNumber>
            <StyledSubtitle bold={true}>
              Years Of Experience
            </StyledSubtitle>
          </StyledFactBox>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;