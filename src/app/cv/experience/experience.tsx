/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { Content, Employments } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Title } from '../../../components/common';
import { ExperienceContent } from '../../../graphql';
import { BaseProps } from '../../../types';

/**
 * The `Experience` component props
 */
interface Props extends BaseProps {
  readonly content: ExperienceContent;
}

/**
 * Used as the entry point for the CV experience page. Renders the
 * CV experience page components using the given `content` prop
 *
 * @param props The component props
 * @returns The `Experience` component
 */
const Experience: FunctionComponent<Props> = ({ content }): ReactElement<Props> => {

  const { employments } = content;
  return (
    <Content
      alignment="flex-start"
      css={css`
        padding-top: 42px;
        padding-bottom: 100px;
      `}
    >
      <Title
        size="large"
        css={css`
          max-width: 400px;
        `}
      >
        Professional Experience
      </Title>
      <Breadcrumbs css={css`
        padding-top: 40px;
        padding-bottom: 80px;
      `}
      >
        <BreadcrumbItem route="/cv">
          Curriculum Vitae
        </BreadcrumbItem>
        <BreadcrumbItem
          route="/cv/experience"
          isActive={true}
        >
          Professional Experience
        </BreadcrumbItem>
      </Breadcrumbs>
      <Employments data={employments} />
    </Content>
  );
};

export default Experience;
