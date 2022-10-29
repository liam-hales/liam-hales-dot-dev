import { FunctionComponent, ReactElement } from 'react';
import { ColourPalette, TextElement } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledTypography } from './text.styled';

/**
 * The `Text` component props
 */
interface Props extends BaseProps {
  readonly colour?: ColourPalette;
  readonly element?: TextElement;
  readonly bold?: boolean;
  readonly italic?: boolean;
  readonly hoverUnderline?: boolean;
  readonly onClick?: () => void;
}

/**
 * The common `Text` component used for typography
 * to render text within the app
 *
 * @param props The component props
 * @returns The `Text` component
 */
const Text: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    colour = ColourPalette.WHITE,
    element = TextElement.PARAGRAPH,
    bold = false,
    italic = false,
    hoverUnderline = false,
    onClick,
    children,
  } = props;

  return (
    <StyledTypography
      className={className}
      colour={colour}
      variant={element}
      bold={bold}
      italic={italic}
      hoverUnderline={hoverUnderline}
      onClick={onClick}
      clickable={onClick != null}
    >
      {children}
    </StyledTypography>
  );
};

export default Text;
