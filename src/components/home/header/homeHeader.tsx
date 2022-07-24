import { FunctionComponent, ReactElement } from 'react';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { BoxAlignment, BoxJustify } from '../../../enums';
import {
  StyledOuterContent,
  StyledImage,
  StyledOverlayImage,
  StyledContent,
  StyledSubtitleBox,
  StyledTitle,
  StyledSubtitleOne,
  StyledSubtitleTwo,
  StyledCapturedBy,
} from './homeHeader.styled';

/**
 * The `HomeHeader` component props
 */
type Props = BaseProps;

/**
 * Renders the header for the home page which
 * is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `HomeHeader` component
 */
const HomeHeader: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { headerImage, headerOverlayImage } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <StyledOuterContent className={className}>
      <StyledImage
        path={headerImage.url}
        alt="Liam Hales - Header"
      />
      <StyledOverlayImage
        path={headerOverlayImage.url}
        alt="Liam Hales - Header"
      />
      <StyledContent
        alignment={BoxAlignment.START}
        justify={BoxJustify.END}
      >
        <StyledTitle bold={true}>
          Liam Hales.
        </StyledTitle>
        <StyledSubtitleBox alignment={BoxAlignment.START}>
          <StyledSubtitleOne bold={true}>
            Software Engineer
          </StyledSubtitleOne>
          <StyledSubtitleTwo>
            from Manchester
          </StyledSubtitleTwo>
        </StyledSubtitleBox>
        <StyledCapturedBy>
          Captured by
          {' '}
          <StyledCapturedBy
            bold={true}
            onClick={() => {}}
          >
            Shayan Rastegar
          </StyledCapturedBy>
        </StyledCapturedBy>
      </StyledContent>
    </StyledOuterContent>
  );
};

export default HomeHeader;
