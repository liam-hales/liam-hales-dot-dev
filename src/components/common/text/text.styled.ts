import { css, styled, Typography } from '@mui/material';

/**
 * The `StyledTypography` component props
 */
interface StyledTypographyProps {
  readonly bold: boolean;
  readonly italic: boolean;
  readonly hoverUnderline: boolean;
  readonly clickable: boolean;
}

/**
 * The CSS for underlining
 * the text on hover
 */
const hoverUnderlineCss = css`
  :hover {
    text-decoration: underline;
    text-decoration-thickness: 1.8px;
    text-underline-offset: 3px;
  };
`;

/**
 * The styled `Typography` component from `@mui/material`
 * used for the `Text` component
 */
export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  display: inline;
  text-transform: none;
  white-space: pre-line;
  font-size: 14px;
  font-weight: ${(props) => {
    return (props.bold === true)
      ? 'bold'
      : 'normal';
  }};
  font-style: ${(props) => {
    return (props.italic === true)
      ? 'italic'
      : 'normal';
  }};
  cursor: ${(props) => {
    return (props.clickable === true)
      ? 'pointer'
      : 'unset';
  }};

  ${(props) => {
    if (props.hoverUnderline === true) {
      return hoverUnderlineCss;
    }
  }}
`;
