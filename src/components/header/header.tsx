import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, ColourPalette, TextElement } from '../../enums';
import { BaseProps } from '../../types';
import { Divider } from '../common';
import { StyledContent, StyledTitle, StyledFullStop, StyledChildren } from './header.styled';

/**
 * The `Header` component props
 */
interface Props extends BaseProps {
  readonly title: string;
}

/**
  * Renders the header used for the pages which
  * is rendered within the page route component
  *
  * @param props The component props
  * @returns The `Header` component
  */
const Header: FunctionComponent<Props> = ({ className, title, children }): ReactElement<Props> => {
  return (
    <>
      <StyledContent
        className={className}
        alignment={BoxAlignment.START}
      >
        <StyledTitle
          bold={true}
          element={TextElement.H1}
        >
          {title}
          <StyledFullStop
            colour={ColourPalette.BLUE}
            bold={true}
          >
            .
          </StyledFullStop>
        </StyledTitle>
        {
          (children != null) && (
            <StyledChildren alignment={BoxAlignment.START}>
              {children}
            </StyledChildren>
          )
        }
      </StyledContent>
      <Divider />
    </>
  );
};

export default Header;
