/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../../types';
import { BoxAlignment, BoxDirection, ColourPalette } from '../../../enums';
import { Box } from '..';

/**
 * The `Timeline` component props
 */
interface Props extends BaseProps {
  readonly hasTrailingConnector?: boolean;
  readonly children: ReactElement[];
}

/**
 * Renders a timeline with each child
 * component being a timeline item
 *
 * @param props The component props
 * @returns The `Timeline` component
 */
const Timeline: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    hasTrailingConnector = false,
    children,
  } = props;

  return (
    <Box
      className={className}
      alignment={BoxAlignment.START}
    >
      {
        children.map((child, index) => {

          const first = (index === 0);
          const last = (hasTrailingConnector === false)
            ? index === (children.length - 1)
            : false;

          return (
            <Box
              key={`timeline-item-${index}`}
              direction={BoxDirection.ROW}
              alignment={BoxAlignment.START}
              css={css`
                position: relative;
              `}
            >
              <div css={css`
                position: absolute;
                width: 2px;
                top: ${(first === true) ? 38 : 0}px;
                bottom: ${(last === true) ? 'calc(100% - 38px)' : '0px'};
                left: 9px;
                background-color: ${ColourPalette.GREY_800};
                z-index: -1;
              `}
              />
              <div css={css`
                width: 20px;
                height: 20px;
                margin-top: 28px;
                flex-shrink: 0;
                border-style: solid;
                border-color: ${ColourPalette.GREY_900};
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
