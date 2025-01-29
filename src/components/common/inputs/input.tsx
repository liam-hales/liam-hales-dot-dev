/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { InputBase } from '@mui/material';
import { css } from '@emotion/react';
import { ColourPalette } from '../../../enums';
import { BaseProps, IconId } from '../../../types';
import { Box, Icon, IconButton } from '..';
import { withRef } from '../../../helpers';

/**
 * The `Input` component props
 */
interface Props extends BaseProps<HTMLInputElement> {
  readonly value: string;
  readonly placeholder?: string;
  readonly iconId?: IconId;
  readonly enterKeyText?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  readonly onChange: (value: string) => void;
  readonly onKeyDown?: (key: string) => void;
  readonly children?: ReactNode;
}

/**
 * The common `Input` component used to render a text input
 * which allows the user to input text within the app
 *
 * @param props The component props
 * @returns The `Input` component
 */
const Input: FunctionComponent<Props> = ({ internalRef, className, value, placeholder, iconId, enterKeyText, onChange, onKeyDown, children }): ReactElement<Props> => {
  return (
    <Box
      className={className}
      direction="row"
      css={css`
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 21px;
        padding-right: ${(children != null) ? 8 : 21}px;
        border-radius: 8px;
        background-color: ${ColourPalette.GREY_900};
      `}
    >
      {
        (iconId != null) && (
          <Icon
            id={iconId}
            css={css`
              margin-right: 10px;
              font-size: 20px;
              flex-shrink: 0;
            `}
          />
        )
      }
      <InputBase
        inputRef={internalRef}
        type="text"
        value={value}
        placeholder={placeholder}
        componentsProps={{
          input: {
            enterKeyHint: enterKeyText,
          },
        }}
        onKeyDown={(event) => onKeyDown?.(event.key)}
        onChange={(event) => {

          // Destructure the event and the event target
          // and pass its value to `onChange`
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
            id="cross"
            colour={ColourPalette.GREY_400}
            onClick={() => onChange('')}
            css={css`
              margin-left: 8px;
              margin-right: ${(children != null) ? 8 : 0}px;
            `}
          />
        )
      }
      {children}
    </Box>
  );
};

export default withRef(Input);
