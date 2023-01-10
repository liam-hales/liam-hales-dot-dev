/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { InputBase, css } from '@mui/material';
import { BoxDirection, ColourPalette, IconId } from '../../enums';
import { BaseProps } from '../../types';
import { Box, Icon, IconButton } from '.';

/**
 * The `Input` component props
 */
interface Props extends BaseProps {
  readonly value: string;
  readonly placeholder?: string;
  readonly iconId?: IconId;
  readonly onChange: (value: string) => void;
}

/**
 * The common `Input` component used to render a text input
 * which allows the user to input text within the app
 *
 * @param props The component props
 * @returns The `Input` component
 */
const Input: FunctionComponent<Props> = ({ className, value, placeholder, iconId, onChange }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      direction={BoxDirection.ROW}
      css={css`
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 21px;
        padding-right: 21px;
        border-radius: 1000px;
        background-color: ${ColourPalette.GREY_800};
      `}
    >
      {
        (iconId != null) && (
          <Icon
            id={iconId}
            css={css`
              padding-right: 12px;
              font-size: 18px;
            `}
          />
        )
      }
      <InputBase
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => {

          // Destructure the event and the event target
          // and pass it's value to `onChange`
          const { target } = event;
          const { value } = target;

          onChange(value);
        }}
        css={css`
          width: 100%;

          .MuiInputBase-input {
            font-size: 16px;
            font-weight: bold;
            color: ${ColourPalette.WHITE};

            ::placeholder {
              color: ${ColourPalette.GREY_400};
            };
          };
        `}
      />
      {
        (value !== '') && (
          <IconButton
            id={IconId.CROSS}
            colour={ColourPalette.GREY_400}
            onClick={() => onChange('')}
            css={css`
              margin-left: 8px;
            `}
          />
        )
      }
    </Box>
  );
};

export default Input;
