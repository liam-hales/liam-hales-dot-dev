/** @jsxImportSource @emotion/react */

import { Typography, css } from '@mui/material';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { ColourPalette, TextElement } from '../../../enums';
import { BaseProps } from '../../../types';

/**
 * The `Text` component props
 */
interface Props extends BaseProps {
  readonly colour?: ColourPalette;
  readonly element?: TextElement;
  readonly isBold?: boolean;
  readonly isItalic?: boolean;
  readonly isMono?: boolean;
  readonly hasHoverUnderline?: boolean;
  readonly onClick?: () => void;
  readonly children: ReactNode;
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
    isBold = false,
    isItalic = false,
    isMono = false,
    hasHoverUnderline = false,
    onClick,
    children,
  } = props;

  return (
    <Typography
      className={className}
      variant={element}
      onClick={onClick}
      css={css`
        display: inline;
        text-transform: none;
        white-space: pre-line;
        color: ${colour};
        font-size: 14px;
        font-weight: ${(isBold === true) ? 'bold' : 'normal'};
        font-style: ${(isItalic === true) ? 'italic' : 'normal'};
        cursor: ${(onClick != null) ? 'pointer' : 'unset'};

        ${(isMono === true) && css`
          font-family: 'Fira Code', monospace;
        `}
        
        ${(hasHoverUnderline === true) && css`
          :hover {
            text-decoration: underline;
            text-decoration-thickness: 1.8px;
            text-underline-offset: 3px;
          };
        `}
      `}
    >
      {children}
    </Typography>
  );
};

export default Text;
