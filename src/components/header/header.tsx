/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../../enums';
import { BaseProps } from '../../types';
import { Divider, Text, Box } from '../common';
import { Content } from '..';

/**
 * The `Header` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly children?: ReactNode;
}

/**
  * Renders the header used for the pages which
  * is rendered within the page route component
  *
  * @param props The component props
  * @returns The `Header` component
  */
const Header: FunctionComponent<Props> = ({ className, title, children }): ReactElement<Props> => {
  return (
    <>
      <Content
        className={className}
        alignment="flex-start"
        css={css`
          padding-top: 42px;
          padding-bottom: 50px;
        `}
      >
        <Text
          isBold={true}
          element="h1"
          css={css`
            max-width: 400px;
            font-size: clamp(58px, 15vw, 78px);
            line-height: 100%;
          `}
        >
          {title}
          <Text
            colour={ColourPalette.BLUE}
            isBold={true}
            element="span"
            css={css`
              font-size: clamp(76px, 15vw, 96px);
              line-height: 0px;
            `}
          >
            .
          </Text>
        </Text>
        {
          (children != null) && (
            <Box
              alignment="flex-start"
              css={css`
                padding-top: 40px;
              `}
            >
              {children}
            </Box>
          )
        }
      </Content>
      <Divider />
    </>
  );
};

export default Header;
