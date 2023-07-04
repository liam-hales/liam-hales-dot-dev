/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Employment } from '../graphql';
import { Box, Text, DateBadge, Title, LogoIcon, Popover, Link, Timeline } from './common';

/**
 * The `Employments` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly data: Employment[];
}

/**
 * Renders the employment data which is used within the
 * `Experience` and `ExperiencePreview` components
 *
 * @param props The component props
 * @returns The `Employments` component
 */
const Employments: FunctionComponent<Props> = ({ className, data }): ReactElement<Props> => {

  const grouped = data.reduce<Employment[][]>((map, current) => {
    const { company } = current;
    const previous = map.at(map.length - 1);

    if (
      previous != null &&
      previous[0].company === company
    ) {
      return [
        ...map.slice(0, -1),
        [
          ...previous,
          current,
        ],
      ];
    }

    return [
      ...map,
      [current],
    ];
  }, []);

  return (
    <Box
      className={className}
      css={css`
        row-gap: 20px;
      `}
    >
      {
        grouped.map((employments, index) => {
          const { company } = employments[0];
          return (
            <div key={`company-${company}`}>
              <Title>
                {company}
              </Title>
              <Timeline
                hasLeadingConnector={index > 0}
                hasTrailingConnector={index < (grouped.length - 1)}
                css={css`
                  padding-top: 20px;
                `}
              >
                {
                  employments.map((employment) => {
                    const { id, title, description, startDate, endDate, skills } = employment;

                    return (
                      <div key={`employment-${id}`}>
                        <DateBadge
                          type="period"
                          startDate={startDate}
                          endDate={endDate}
                        />
                        <Text
                          isBold={true}
                          css={css`
                            padding-top: 10px;
                            font-size: 24px;
                            line-height: 122%;
                          `}
                        >
                          {title}
                        </Text>
                        <Box
                          direction="row"
                          wrap={true}
                          css={css`
                            padding-top: 16px;
                            padding-bottom: 16px;
                            column-gap: 20px;
                            row-gap: 10px;
                          `}
                        >
                          {
                            skills.map((skill) => {
                              const { id, name, iconId, url } = skill;
                              return (
                                <Popover
                                  key={`skill-${id}`}
                                  text={name}
                                >
                                  <Link
                                    href={url}
                                    target="_blank"
                                    passHref={true}
                                    aria-label={name}
                                  >
                                    <LogoIcon
                                      id={iconId}
                                      css={css`
                                        font-size: 20px;
                                      `}
                                    />
                                  </Link>
                                </Popover>
                              );
                            })
                          }
                        </Box>
                        <Text colour={ColourPalette.GREY_400}>
                          {description}
                        </Text>
                      </div>
                    );
                  })
                }
              </Timeline>
            </div>
          );
        })
      }
    </Box>
  );
};

export default Employments;
