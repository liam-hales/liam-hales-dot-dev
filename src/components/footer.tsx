/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import Link from 'next/link';
import { BoxDirection, BoxAlignment, ColourPalette, BoxJustify, IconId, SVGIconId } from '../enums';
import { BaseProps } from '../types';
import { useDate } from '../hooks';
import { GlobalContent } from '../graphql';
import { Box, Divider, Icon, IconButton, Text } from './common';
import { Content, Logo, EmailModal } from '.';

/**
 * The `Footer` component props
 */
interface Props extends BaseProps {
  readonly globalContent: GlobalContent;
}

/**
 * Renders the app footer which is rendered within
 * the `App` component after the router
 *
 * @param props The component props
 * @returns The `Footer` component
 */
const Footer: FunctionComponent<Props> = ({ globalContent }): ReactElement<Props> => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { utc } = useDate();

  const year = utc().format('YYYY');
  const copyrightText = ` ${year} - Liam Hales`;

  const {
    emailText,
    email,
    footerText,
    stackOverflowUrl,
    linkedInUrl,
    buyMeCoffeeUrl,
    notionUrl,
    builtUsingText,
  } = globalContent;

  return (
    <>
      <Divider />
      <EmailModal
        text={emailText}
        email={email}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
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
              isBold={true}
              css={css`
                font-size: 24px;
                padding-bottom: 8px;
              `}
            >
              Liam Hales
            </Text>
            <Text colour={ColourPalette.GREY_400}>
              {footerText}
            </Text>
          </Box>
          <Logo css={css`
            width: 46px;
            flex-shrink: 0;
          `}
          />
        </Box>
        <Box
          direction={BoxDirection.ROW}
          css={css`
            column-gap: 14px;
          `}
        >
          <IconButton
            id={IconId.ENVELOPE}
            onClick={() => setModalOpen(true)}
          />
          <Link
            href={stackOverflowUrl}
            target="_blank"
            passHref={true}
            aria-label="Stack Overflow"
          >
            <IconButton id={IconId.STACK_OVERFLOW} />
          </Link>
          <Link
            href={linkedInUrl}
            target="_blank"
            passHref={true}
            aria-label="LinkedIn"
          >
            <IconButton id={IconId.LINKED_IN} />
          </Link>
          <Link
            href={buyMeCoffeeUrl}
            target="_blank"
            passHref={true}
            aria-label="Buy Me a Coffee"
          >
            <IconButton id={SVGIconId.BUY_ME_COFFEE} />
          </Link>
          <Link
            href={notionUrl}
            target="_blank"
            passHref={true}
            aria-label="Notion"
          >
            <IconButton id={SVGIconId.NOTION} />
          </Link>
        </Box>
        <Box css={css`
          width: 100%;
          padding-top: 60px;
          padding-bottom: 20px;
        `}
        >
          <Text isBold={true}>
            <Icon
              id={IconId.COPYRIGHT}
              colour={ColourPalette.WHITE}
              css={css`
                padding-right: 2px;
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
