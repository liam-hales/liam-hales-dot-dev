import { FunctionComponent, ReactElement } from 'react';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { StyledContent, StyledImage } from './homeHeader.styled';

/**
 * The `HomeHeader` component props
 */
type Props = BaseProps;

/**
 * Used to render the home page header which
 * consists of the main image and name title text
 *
 * @param props The component props
 * @returns The `HomeHeader` component
 */
const HomeHeader: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { headerImage } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <StyledContent className={className}>
      <StyledImage
        path={headerImage.url}
        alt="Liam Hales - Header"
      />
    </StyledContent>
  );
};

export default HomeHeader;
