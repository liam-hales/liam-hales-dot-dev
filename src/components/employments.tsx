/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { Employment } from '../graphql';
import { Box, Text, DateBadge, Title, LogoIcon, Popover, Link } from './common';

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
                <Box css={css`
                  padding-top: 26px;
                  row-gap: 10px;
                `}
                >
                  {
                    grouped[company].map((employment) => {
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
                            css={css`
                              padding-top: 16px;
                              padding-bottom: 16px;
                              column-gap: 20px;
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
                </Box>
              </div>
            );
          })
      }
    </Box>
  );
};

export default Employments;
