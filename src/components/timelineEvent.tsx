/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, Fragment } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../types';
import { ColourPalette } from '../enums';
import { TimelineEvent as TEvent } from '../graphql';
import { Box, Text, DateBadge, LogoIcon, Popover, Link, Markdown, Card } from './common';

/**
 * The `TimelineEvent` component props
 */
interface Props extends BaseProps {
  readonly event: TEvent;
}

/**
 * Renders a timeline event which should be
 * rendered within the `Timeline` component
 *
 * @param props The component props
 * @returns The `TimelineEvent` component
 */
const TimelineEvent: FunctionComponent<Props> = ({ event }): ReactElement<Props> => {

  const { title, ...rest } = event;
  const { __typename: type } = rest;

  return (
    <Box alignment="flex-start">
      {
        (type === 'TimelinePointEvent') && (
          <DateBadge
            type="point"
            date={rest.date}
          />
        )
      }
      {
        (type === 'TimelinePeriodEvent') && (
          <DateBadge
            type="period"
            startDate={rest.startDate}
            endDate={rest.endDate}
          />
        )
      }
      <Text
        isBold={true}
        css={css`
          padding-top: 10px;
          font-size: 24px;
          line-height: 122%;
        `}
      >
        {title.replace(' at ', '\nat ')}
      </Text>
      {
        (type === 'TimelinePointEvent') && (
          <Text
            colour={ColourPalette.GREY_400}
            css={css`
              padding-top: 20px;
            `}
          >
            {rest.description}
          </Text>
        )
      }
      {
        (type === 'TimelinePeriodEvent') && (
          <Fragment>
            <Markdown css={css`
              padding-top: 4px;
              padding-bottom: 16px;
            `}
            >
              {rest.content}
            </Markdown>
            {
              (rest.skills.length > 0) && (
                <Fragment>
                  <Text
                    colour={ColourPalette.WHITE}
                    isBold={true}
                    css={css`
                      padding-bottom: 12px;
                      font-size: 20px;
                    `}
                  >
                    Skills Applied
                  </Text>
                  <Box
                    direction="row"
                    wrap={true}
                    css={css`
                      column-gap: 6px;
                      row-gap: 6px;
                    `}
                  >
                    {
                      rest.skills.map((skill) => {
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
                              <Card css={css`
                                padding: 12px;
                              `}
                              >
                                <LogoIcon
                                  id={iconId}
                                  css={css`
                                    font-size: 20px;
                                  `}
                                />
                              </Card>
                            </Link>
                          </Popover>
                        );
                      })
                    }
                  </Box>
                </Fragment>
              )
            }
          </Fragment>
        )
      }
    </Box>
  );
};

export default TimelineEvent;
