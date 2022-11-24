/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import moment from 'moment';
import { BoxDirection, BoxAlignment, ColourPalette, BoxJustify, IconId } from '../enums';
import { PageSlug } from '../graphql';
import { usePageContent } from '../hooks';
import { BaseProps } from '../types';
import { Box, Divider, Icon, Text } from './common';
import { Content, SocialIcons, Logo } from '.';

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
        <Box
          direction={BoxDirection.ROW}
          justify={BoxJustify.SPACE_BETWEEN}
          css={css`
            width: 100%;
            padding-top: 50px;
            padding-bottom: 20px;
          `}
        >
          <Box
            alignment={BoxAlignment.START}
            css={css`
              max-width: 420px;
              margin-right: 70px;
            `}
          >
            <Text
              bold={true}
              css={css`
                font-size: 24px;
                padding-bottom: 8px;
              `}
            >
              Liam Hales
            </Text>
            <Text colour={ColourPalette.LIGHT_GREY}>
              {footerText}
            </Text>
          </Box>
          <Logo css={css`
            width: 46px;
            flex-shrink: 0;
          `}
          />
        </Box>
        <SocialIcons />
        <Box css={css`
          width: 100%;
          padding-top: 60px;
          padding-bottom: 20px;
        `}
        >
          <Text bold={true}>
            <Icon
              id={IconId.COPYRIGHT}
              colour={ColourPalette.WHITE}
              css={css`
                padding-right: 2px;
              `}
            />
            {` ${year} - Liam Hales`}
          </Text>
          <Text
            colour={ColourPalette.GREY}
            css={css`
              padding-top: 4px;
              font-size: 11px;
          `}
          >
            {builtUsingText}
          </Text>
        </Box>
      </Content>
    </div>
  );
};

export default Footer;
