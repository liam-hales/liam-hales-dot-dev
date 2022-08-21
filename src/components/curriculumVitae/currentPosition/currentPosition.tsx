import { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { BoxAlignment, BoxDirection, TextAppearance } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box, Title } from '../../common';
import { StyledDescription, StyledStat } from './currentPosition.styled';

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
const CurrentPosition: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { currentPositionText, careerStartDate } = usePageContent({
    slug: PageSlug.CV,
  });

  // Calculate the years in the industry and the number of years
  // at the company I work for from the career start date
  const yearsInIndustry = moment.utc().diff(careerStartDate, 'years');
  const yearsAtCompany = yearsInIndustry - 1;

  return (
    <Box
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Current Position
      </Title>
      <StyledDescription appearance={TextAppearance.SECONDARY}>
        {currentPositionText}
      </StyledDescription>
      <Box direction={BoxDirection.ROW}>
        <StyledStat
          value={yearsInIndustry}
          text="Years in the Industry"
        />
        <StyledStat
          value={yearsAtCompany}
          text="Years at ANS Group"
        />
      </Box>
    </Box>
  );
};

export default CurrentPosition;
