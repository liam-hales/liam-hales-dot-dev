/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../types';
import { ColourPalette } from '../enums';
import { TimelineEvent as TEvent } from '../graphql';
import { Box, Text, DateBadge, Popover, Link, LogoIcon } from './common';

/**
 * The `TimelineEvent` component props
 */
interface Props extends BaseProps {
  readonly event: TEvent;
  readonly isFirst?: boolean;
}

/**
 * Renders a timeline event which should be
 * rendered within the `Timeline` component
 *
 * @param props The component props
 * @returns The `TimelineEvent` component
 */
const TimelineEvent: FunctionComponent<Props> = ({ event, isFirst = false }): ReactElement<Props> => {

  const { title, description, ...rest } = event;
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
          max-width: ${(isFirst === true) ? '580px' : 'unset'};
          padding-top: 10px;
          padding-bottom: 8px;
          font-size: ${(isFirst === true) ? 34 : 24}px;
          line-height: 122%;
        `}
      >
        {title}
      </Text>
      {
        (
          type === 'TimelinePeriodEvent' &&
          rest.skills.length > 0
        ) && (
          <Box
            direction="row"
            wrap={true}
            css={css`
              padding-top: 8px;
              padding-bottom: 16px;
              column-gap: 20px;
              row-gap: 10px;
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
        )
      }
      <Text colour={ColourPalette.GREY_400}>
        {description}
      </Text>
    </Box>
  );
};

export default TimelineEvent;
