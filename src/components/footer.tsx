/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { BoxDirection, BoxAlignment, ColourPalette, BoxJustify, IconId } from '../enums';
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
  } = content;

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
            column-gap: 16px;
          `}
        >
          <Popover text="Email">
            <IconButton
              id={IconId.ENVELOPE}
              onClick={() => setModalOpen(true)}
            />
          </Popover>
          <Popover text="Stack Overflow">
            <Link
              href={stackOverflowUrl}
              target="_blank"
              passHref={true}
              aria-label="Stack Overflow"
            >
              <IconButton
                id={IconId.STACK_OVERFLOW}
                css={css`
                  svg {
                    font-size: 19px;
                  };
                `}
              />
            </Link>
          </Popover>
          <Popover text="LinkedIn">
            <Link
              href={linkedInUrl}
              target="_blank"
              passHref={true}
              aria-label="LinkedIn"
            >
              <IconButton
                id={IconId.LINKED_IN}
                css={css`
                  svg {
                    font-size: 19px;
                  };
                `}
              />
            </Link>
          </Popover>
          <Popover text="Buy Me a Coffee">
            <Link
              href={buyMeCoffeeUrl}
              target="_blank"
              passHref={true}
              aria-label="Buy Me a Coffee"
            >
              <IconButton
                id={IconId.BUY_ME_COFFEE}
                css={css`
                  svg {
                    font-size: 20px;
                  };
                `}
              />
            </Link>
          </Popover>
          <Popover text="Notion">
            <Link
              href={notionUrl}
              target="_blank"
              passHref={true}
              aria-label="Notion"
            >
              <IconButton
                id={IconId.NOTION}
                css={css`
                  svg {
                    font-size: 20px;
                  };
                `}
              />
            </Link>
          </Popover>
        </Box>
        <Box css={css`
          width: 100%;
          padding-top: 60px;
          padding-bottom: 20px;
        `}
        >
          <Box direction={BoxDirection.ROW}>
            <Icon
              id={IconId.COPYRIGHT}
              colour={ColourPalette.WHITE}
              css={css`
                margin-right: 6px;
                font-size: 14px;
              `}
            />
            <Text isBold={true}>
              {copyrightText}
            </Text>
          </Box>
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
