import { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { Content, SocialIcons } from '..';
import { BoxDirection, BoxAlignment, ColourPalette, BoxJustify } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { Divider, Text } from '../common';
import { BaseProps } from '../../types';
import {
  StyledBox,
  StyledInfoBox,
  StyledTitle,
  StyledDescription,
  StyledLogoSvg,
  StyledCopyrightBox,
  StyledBuiltUsing,
} from './footer.styled';

/**
 * The `Footer` component props
 */
type Props = BaseProps;

/**
 * Renders the app footer which is rendered within
 * the `App` component after the router
 *
 * @param props The component props
 * @returns The `Footer` component
 */
const Footer: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { footerText, builtUsingText } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  const year = moment
    .utc()
    .format('YYYY');

  return (
    <div className={className}>
      <Divider />
      <Content alignment={BoxAlignment.START}>
        <StyledBox
          direction={BoxDirection.ROW}
          justify={BoxJustify.SPACE_BETWEEN}
        >
          <StyledInfoBox alignment={BoxAlignment.START}>
            <StyledTitle bold={true}>
              Liam Hales
            </StyledTitle>
            <StyledDescription colour={ColourPalette.LIGHT_GREY}>
              {footerText}
            </StyledDescription>
          </StyledInfoBox>
          <StyledLogoSvg />
        </StyledBox>
        <SocialIcons />
        <StyledCopyrightBox>
          <Text bold={true}>
            {`${year} • Liam Hales`}
          </Text>
          <StyledBuiltUsing colour={ColourPalette.GREY}>
            {builtUsingText}
          </StyledBuiltUsing>
        </StyledCopyrightBox>
      </Content>
    </div>
  );
};

export default Footer;
