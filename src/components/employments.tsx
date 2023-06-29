/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Employment } from '../graphql';
import { Box, Text, TimelineEventDate, Title } from './common';

/**
 * The `Employments` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly data: Employment[];
}

/**
 * Renders the employment data which is used within the
 * `ProExperience` and `ProExperiencePreview` components
 *
 * @param props The component props
 * @returns The `Employments` component
 */
const Employments: FunctionComponent<Props> = ({ className, data }): ReactElement<Props> => {

  const grouped = data.reduce<Record<string, Employment[]>>((map, current) => {
    const { company } = current;
    const forCompany = map[company];

    return {
      ...map,
      [company]: (forCompany != null)
        ? [
            ...forCompany,
            current,
          ]
        : [current],
    };
  }, {});

  return (
    <Box
      className={className}
      css={css`
        row-gap: 46px;
      `}
    >
      {
        Object
          .keys(grouped)
          .map((company) => {
            return (
              <div key={`company-${company}`}>
                <Title>
                  {company}
                </Title>
                <Box
                  css={css`
                    padding-top: 26px;
                    row-gap: 10px;
                  `}
                >
                  {
                    grouped[company].map((employment) => {
                      const { id, title, description, startDate, endDate } = employment;

                      return (
                        <div key={`employment-${id}`}>
                          <TimelineEventDate
                            type="period"
                            startDate={startDate}
                            endDate={endDate}
                          />
                          <Text
                            isBold={true}
                            css={css`
                              padding-top: 10px;
                              padding-bottom: 16px;
                              font-size: 24px;
                              line-height: 122%;
                            `}
                          >
                            {title}
                          </Text>
                          <Text colour={ColourPalette.GREY_400}>
                            {description}
                          </Text>
                        </div>
                      );
                    })
                  }
                </Box>
              </div>
            );
          })
      }
    </Box>
  );
};

export default Employments;
