import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment } from '../../enums';
import { BaseProps } from '../../types';
import { Divider } from '../common';
import { StyledContent, StyledTitle, StyledFullStop } from './header.styled';

/**
 * The `Header` component props
 */
interface Props extends BaseProps {
  title: string;
}

/**
  * Renders the header used for the pages which
  * is rendered within the page route component
  *
  * @param props The component props
  * @returns The `Header` component
  */
const Header: FunctionComponent<Props> = ({ className, title }): ReactElement<Props> => {
  return (
    <>
      <StyledContent
        className={className}
        alignment={BoxAlignment.START}
      >
        <StyledTitle bold={true}>
          {title}
          <StyledFullStop bold={true}>
            .
          </StyledFullStop>
        </StyledTitle>
      </StyledContent>
      <Divider />
    </>
  );
};

export default Header;
