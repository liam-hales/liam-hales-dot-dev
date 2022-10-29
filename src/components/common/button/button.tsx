import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { Text } from '..';
import { ColourPalette, IconId } from '../../../enums';
import { StyledButton, StyledIcon } from './button.styled';

/**
 * The `Button` component props
 */
interface Props extends BaseProps<string> {
  readonly colour?: ColourPalette;
  readonly iconId?: IconId;
  readonly onClick: () => void;
}

/**
 * The common `Button` component used to
 * render a button to perform an action
 *
 * @param props The component props
 * @returns The `Button` component
 */
const Button: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    colour = ColourPalette.BLUE,
    iconId,
    onClick,
    children,
  } = props;

  return (
    <StyledButton
      className={className}
      variant="contained"
      color={colour}
      disableElevation={true}
      onClick={onClick}
    >
      {
        (iconId != null) && (
          <StyledIcon
            id={iconId}
            colour={ColourPalette.WHITE}
          />
        )
      }
      <Text bold={true}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
