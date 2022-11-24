/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette, TextElement } from '../../../enums';
import { BaseProps } from '../../../types';
import { Text } from '..';

/**
 * The `Title` component props
 */
type Props = BaseProps;

/**
 * Renders the title text followed by a trailing full stop
 * set in a slightly larger font size in the primary colour
 *
 * @param props The component props
 * @returns The `Title` component
 */
const Title: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <Text
      className={className}
      bold={true}
      element={TextElement.H2}
      css={css`
        font-size: 38px;
        line-height: 122%;
      `}
    >
      {children}
      <Text
        colour={ColourPalette.BLUE}
        bold={true}
        css={css`
          font-size: 56px;
          line-height: 0px;
        `}
      >
        .
      </Text>
    </Text>
  );
};

export default Title;
