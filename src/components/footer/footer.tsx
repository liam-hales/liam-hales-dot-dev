import { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { useMediaQuery, useTheme } from '@mui/material';
import { Content, SocialIcons } from '..';
import { BoxDirection, BoxAlignment, TextAppearance, BoxJustify, ScreenSize } from '../../enums';
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
  StyledSpacer,
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

  const { breakpoints } = useTheme();
  const { footerText, builtUsingText } = usePageContent({
    slug: PageSlug.GLOBAL,
  });

  const mediaQuery = breakpoints.down(ScreenSize.MEDIUM);
  const belowMedium = useMediaQuery(mediaQuery);

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
            <StyledDescription appearance={TextAppearance.SECONDARY}>
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
          <StyledBuiltUsing appearance={TextAppearance.SUBTLE}>
            {builtUsingText}
          </StyledBuiltUsing>
        </StyledCopyrightBox>
      </Content>
      {
        (belowMedium === true) && (
          <StyledSpacer />
        )
      }
    </div>
  );
};

export default Footer;
