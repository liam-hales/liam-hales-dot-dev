/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useState } from 'react';
import { InputBase, css } from '@mui/material';
import { BoxDirection, ColourPalette, IconId } from '../../enums';
import { useDebounce } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Icon, IconButton } from '.';

/**
 * The `Input` component props
 */
interface Props extends BaseProps {
  readonly value: string;
  readonly placeholder: string;
  readonly delay: number;
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
const Input: FunctionComponent<Props> = ({ className, value, placeholder, iconId, delay, onChange }): ReactElement<Props> => {

  const [_value, setValue] = useState<string>(value);

  useDebounce(() => {

    // Only call `onChange` if the value is different to the
    // temp value so it's not called the first time the
    // component renders as this causes a render loop
    if (_value !== value) {
      onChange(_value);
    }
  }, delay);

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
        background-color: ${ColourPalette.DARK_GREY};
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
        value={_value}
        placeholder={placeholder}
        onChange={(event) => {

          // Destructure the event and the event target
          // and pass it's value to onChange
          const { target } = event;
          const { value } = target;

          setValue(value);
        }}
        css={css`
          width: 100%;

          .MuiInputBase-input {
            font-size: 16px;
            font-weight: bold;
            color: ${ColourPalette.WHITE};

            ::placeholder {
              color: ${ColourPalette.LIGHT_GREY};
            };
          };
        `}
      />
      {
        (_value !== '') && (
          <IconButton
            id={IconId.CROSS}
            colour={ColourPalette.LIGHT_GREY}
            onClick={() => {

              // Reset the value state and call the on change
              // function to clear the input instantly
              setValue('');
              onChange('');
            }}
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
