/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { Box } from '.';

/**
 * The `Timeline` component props
 */
interface Props extends BaseProps {
  readonly hasLeadingConnector?: boolean;
  readonly hasTrailingConnector?: boolean;
  readonly children: ReactElement[];
}

/**
 * Renders a timeline with each child
 * component being a timeline event
 *
 * @param props The component props
 * @returns The `Timeline` component
 */
const Timeline: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    hasLeadingConnector = false,
    hasTrailingConnector = false,
    children,
  } = props;

  return (
    <Box
      className={className}
      alignment="flex-start"
    >
      {
        children.map((child, index) => {
          const { key } = child;

          const isFirst = (hasLeadingConnector === false)
            ? index === 0
            : false;

          const isLast = (hasTrailingConnector === false)
            ? index === (children.length - 1)
            : false;

          return (
            <Box
              key={key}
              direction="row"
              alignment="flex-start"
              css={css`
                position: relative;
              `}
            >
              <div css={css`
                position: absolute;
                width: 2px;
                top: ${(isFirst === true) ? 38 : 0}px;
                bottom: ${(isLast === true) ? 'calc(100% - 38px)' : '0px'};
                left: 9px;
                background-color: ${ColourPalette.GREY_900};
                z-index: -1;
              `}
              />
              <div css={css`
                width: 20px;
                height: 20px;
                margin-top: ${(isFirst === true) ? 42 : 36}px;
                flex-shrink: 0;
                border-style: solid;
                border-color: ${ColourPalette.GREY_1000};
                border-width: 4px;
                border-radius: 50%;
                background-color: ${ColourPalette.BLUE};
              `}
              />
              <Box css={css`
                padding-left: 12px;
                padding-bottom: 40px;
              `}
              >
                {child}
              </Box>
            </Box>
          );
        })
      }
    </Box>
  );
};

export default Timeline;
