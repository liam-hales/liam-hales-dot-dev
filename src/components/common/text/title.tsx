/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../../enums';
import { BaseProps, TextElement } from '../../../types';
import { Text } from '..';

/**
 * The `Title` component props
 */
interface Props extends BaseProps {
  readonly size?: 'small' | 'large';
  readonly element?: TextElement;
  readonly children: string;
}

/**
 * Renders the title text followed by a trailing full stop
 * set in a slightly larger font size in the primary colour
 *
 * @param props The component props
 * @returns The `Title` component
 */
const Title: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    size = 'small',
    element = 'h1',
    children,
  } = props;

  return (
    <Text
      className={className}
      isBold={true}
      element={element}
      css={css`
        font-size: ${(size === 'small') ? '38px' : 'clamp(58px, 15vw, 78px)'};
        line-height: ${(size === 'small') ? 122 : 100}%;
      `}
    >
      {children}
      <Text
        colour={ColourPalette.BLUE}
        isBold={true}
        element="span"
        css={css`
          font-size: ${(size === 'small') ? '56px' : 'clamp(76px, 15vw, 96px)'};
          line-height: 0px;
        `}
      >
        .
      </Text>
    </Text>
  );
};

export default Title;
