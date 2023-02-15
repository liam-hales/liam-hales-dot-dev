/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../enums';
import { BaseProps } from '../types';
import { useDate } from '../hooks';
import { GlobalContent } from '../graphql';
import { Box, Divider, Icon, IconButton, Text, Popover, Link } from './common';
import { Content, Logo, EmailModal } from '.';

/**
 * The `Footer` component props
 */
interface Props extends BaseProps {
  readonly content: GlobalContent;
}

/**
 * Renders the app footer which is rendered within
 * the `App` component after the router
 *
 * @param props The component props
 * @returns The `Footer` component
 */
const Footer: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { utc } = useDate();

  const {
    emailText,
    email,
    footerText,
    stackOverflowUrl,
    linkedInUrl,
    buyMeCoffeeUrl,
    notionUrl,
    builtUsingText,
    me,
  } = content;
  const { firstName, lastName } = me;

  const year = utc().format('YYYY');
  const copyrightText = ` ${year} - ${firstName} ${lastName}`;

  return (
    <>
      <EmailModal
        text={emailText}
        email={email}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <Divider />
      <Content alignment="flex-start">
        <Box
          direction="row"
          justify="space-between"
          css={css`
            width: 100%;
            padding-top: 50px;
            padding-bottom: 20px;
          `}
        >
          <Box
            alignment="flex-start"
            css={css`
              max-width: 420px;
              margin-right: 70px;
            `}
          >
            <Text
              isBold={true}
              css={css`
                font-size: 24px;
                padding-bottom: 8px;
              `}
            >
              {firstName}
              {' '}
              {lastName}
            </Text>
            <Text colour={ColourPalette.GREY_400}>
              {footerText}
            </Text>
          </Box>
          <Logo css={css`
            width: 52px;
            flex-shrink: 0;
          `}
          />
        </Box>
        <Box
          direction="row"
          css={css`
            column-gap: 16px;
          `}
        >
          <Popover text="Email">
            <IconButton
              id="envelope"
              onClick={() => setModalOpen(true)}
              css={css`
                svg {
                  font-size: 25px;
                };
              `}
            />
          </Popover>
          <Popover text="LinkedIn">
            <Link
              href={linkedInUrl}
              target="_blank"
              passHref={true}
              aria-label="LinkedIn"
            >
              <IconButton id="linkedIn" />
            </Link>
          </Popover>
          <Popover text="Stack Overflow">
            <Link
              href={stackOverflowUrl}
              target="_blank"
              passHref={true}
              aria-label="Stack Overflow"
            >
              <IconButton id="stackOverflow" />
            </Link>
          </Popover>
          <Popover text="Notion">
            <Link
              href={notionUrl}
              target="_blank"
              passHref={true}
              aria-label="Notion"
            >
              <IconButton id="notion" />
            </Link>
          </Popover>
          <Popover text="Buy Me a Coffee">
            <Link
              href={buyMeCoffeeUrl}
              target="_blank"
              passHref={true}
              aria-label="Buy Me a Coffee"
            >
              <IconButton id="buyMeCoffee" />
            </Link>
          </Popover>
        </Box>
        <Box css={css`
          width: 100%;
          padding-top: 60px;
          padding-bottom: 20px;
        `}
        >
          <Text isBold={true}>
            <Icon
              id="copyright"
              colour={ColourPalette.WHITE}
              css={css`
                vertical-align: text-top;
                font-size: 18px;
              `}
            />
            {copyrightText}
          </Text>
          <Text
            colour={ColourPalette.GREY_600}
            css={css`
              max-width: 260px;
              padding-top: 4px;
              font-size: 11px;
              text-align: center;
            `}
          >
            {builtUsingText}
          </Text>
        </Box>
      </Content>
    </>
  );
};

export default Footer;
