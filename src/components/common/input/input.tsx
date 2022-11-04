import { FunctionComponent, ReactElement, useState } from 'react';
import { BoxDirection, ColourPalette, IconId } from '../../../enums';
import { useDebounce } from '../../../hooks';
import { BaseProps } from '../../../types';
import { StyledBox, StyledInput, StyledIcon, StyledClearButton } from './input.styled';

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
    <StyledBox
      className={className}
      direction={BoxDirection.ROW}
    >
      {
        (iconId != null) && (
          <StyledIcon id={iconId} />
        )
      }
      <StyledInput
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
      />
      {
        (_value !== '') && (
          <StyledClearButton
            id={IconId.CROSS}
            colour={ColourPalette.LIGHT_GREY}
            onClick={() => {

              // Reset the value state and call the on change
              // function to clear the input instantly
              setValue('');
              onChange('');
            }}
          />
        )
      }
    </StyledBox>
  );
};

export default Input;
