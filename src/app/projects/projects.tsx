/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { Content } from '../../components';
import { Title, Text } from '../../components/common';
import { ColourPalette } from '../../enums';

const Projects: FunctionComponent = (): ReactElement => {
  return (
    <Content css={css`
      padding-top: 90px;
      padding-bottom: 160px;
    `}
    >
      <Title>
        Coming soon
      </Title>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          max-width: 260px;
          padding-top: 16px;
          padding-bottom: 38px;
          text-align: center;
        `}
      >
        This page is currently in development, come back soon to check it out.
      </Text>
    </Content>
  );
};

export default Projects;
