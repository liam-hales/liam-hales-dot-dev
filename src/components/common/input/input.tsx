import { FunctionComponent, ReactElement, useState } from 'react';
import { BoxDirection, IconId } from '../../../enums';
import { useDebounce } from '../../../hooks';
import { BaseProps } from '../../../types';
import { StyledBox, StyledInput, StyledIcon, StyledClearIcon } from './input.styled';

/**
 * The `Input` component props
 */
interface Props extends BaseProps {
  readonly defaultValue: string;
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
const Input: FunctionComponent<Props> = ({ className, defaultValue, placeholder, iconId, delay, onChange }): ReactElement<Props> => {

  const [value, setValue] = useState<string>(defaultValue);
  useDebounce(() => onChange(value), delay);

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
        value={value}
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
        (value !== '') && (
          <StyledClearIcon
            id={IconId.CROSS}
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
