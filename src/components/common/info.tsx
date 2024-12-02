/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { Card, Icon, Text } from '.';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';

/**
 * The `Info` component props
 */
interface Props extends BaseProps {
  readonly children: string;
}

/**
 * Used to display an infomation alert to draw the
 * users attention to a specific piece of text
 *
 * @param props The component props
 * @returns The `Info` component
 */
const Info: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <Card
      className={className}
      direction="row"
      css={css`
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 22px;
        padding-right: 22px;
      `}
    >
      <Icon
        id="info"
        css={css`
          margin-right: 16px;
          font-size: 24px;
          flex-shrink: 0;
        `}
      />
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          font-size: 12px;
        `}
      >
        {children}
      </Text>
    </Card>
  );
};

export default Info;
