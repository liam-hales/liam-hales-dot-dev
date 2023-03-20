/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { BaseProps } from '../../types';
import { ColourPalette } from '../../enums';
import { Card, Text } from '.';

/**
 * The `Tag` component props
 */
interface Props extends BaseProps {
  readonly colour?: string;
  readonly children: string;
}

/**
 * Renders a pill shaped tag used
 * to display infomation
 *
 * @param props The component props
 * @returns The `Tag` component
 */
const Tag: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    colour = ColourPalette.WHITE,
    children,
  } = props;

  return (
    <Card
      className={className}
      css={css`
        background-color: ${colour}33;
      `}
    >
      <Text
        isBold={true}
        css={css`
          font-size: 12px;
          color: ${colour};
          padding-top: 2.4px;
          padding-bottom: 2.4px;
          padding-left: 11px;
          padding-right: 11px;
        `}
      >
        {children}
      </Text>
    </Card>
  );
};

export default Tag;
