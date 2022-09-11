import { FunctionComponent, ReactElement } from 'react';
import { BoxDirection, IconId } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledBox, StyledInput, StyledIcon, StyledClearIcon } from './input.styled';

/**
 * The `Input` component props
 */
interface Props extends BaseProps {
  readonly value: string;
  readonly placeholder: string;
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

          onChange(value);
        }}
      />
      {
        (value !== '') && (
          <StyledClearIcon
            id={IconId.CROSS}
            onClick={() => onChange('')}
          />
        )
      }
    </StyledBox>
  );
};

export default Input;
