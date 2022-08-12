import { FunctionComponent, ReactElement } from 'react';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { BoxAlignment, BoxJustify, TextElement } from '../../../enums';
import { Typewriter } from '../../common';
import {
  StyledOuterContent,
  StyledImage,
  StyledOverlayImage,
  StyledContent,
  StyledSubtitleBox,
  StyledTitle,
  StyledSubtitle,
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

  const { shayanRastegarUrl } = usePageContent({
    slug: PageSlug.GLOBAL,
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
        <StyledTitle
          bold={true}
          element={TextElement.H1}
        >
          Liam Hales.
        </StyledTitle>
        <StyledSubtitleBox alignment={BoxAlignment.START}>
          <StyledSubtitle
            bold={true}
            element={TextElement.H2}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Software dev')
                  .pauseFor(100)
                  .deleteChars(4)
                  .typeString('<br/>Engineer from<br/>manny')
                  .pauseFor(200)
                  .deleteChars(5)
                  .typeString('Manchester.')
                  .pauseFor(10000)
                  .typeString('<br/>¯\\_(ツ)_/¯')
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString('.')
                  .start();
              }}
            />
          </StyledSubtitle>
        </StyledSubtitleBox>
        <StyledCapturedBy>
          Captured by
          {' '}
          <StyledCapturedBy
            bold={true}
            onClick={() => window.open(shayanRastegarUrl, '_blank')}
          >
            Shayan Rastegar
          </StyledCapturedBy>
        </StyledCapturedBy>
      </StyledContent>
    </StyledOuterContent>
  );
};

export default HomeHeader;
