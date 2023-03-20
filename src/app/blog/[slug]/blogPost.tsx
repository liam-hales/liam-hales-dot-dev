/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { Content } from '../../../components';
import { BaseProps } from '../../../types';
import { BlogPost as BlogPostData } from '../../../graphql';
import { Box, Image, Text, Tag, Markdown, Divider, Title } from '../../../components/common';
import { ColourPalette } from '../../../enums';
import { useDate } from '../../../hooks';

/**
 * The `BlogPost` component props
 */
interface Props extends BaseProps {
  readonly post: BlogPostData;
}

/**
 * Used as the entry point for the blog post page. Renders the
 * blog post using the given `post` prop
 *
 * @returns The `BlogPost` component
 */
const BlogPost: FunctionComponent<Props> = ({ post }): ReactElement<Props> => {

  const { from } = useDate();
  const {
    title,
    content,
    tags,
    author,
    publishedDate,
  } = post;

  const {
    firstName,
    lastName,
    professionalTitle,
    image,
  } = author;

  const formattedDate = from(publishedDate).format('MMMM YYYY');
  const timeAgo = from(publishedDate).fromNow();

  return (
    <Content
      alignment="flex-start"
      css={css`
        padding-top: 42px;
        padding-bottom: 100px;
      `}
    >
      <Title>
        {title}
      </Title>
      <Box
        direction="row"
        justify="space-between"
        css={css`
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        `}
      >
        <Box direction="row">
          <Image
            path={image.url}
            alt={`${firstName} ${lastName}`}
            width={50}
            height={50}
            css={css`
              margin-right: 12px;
              border-radius: 50%;
            `}
          />
          <Box alignment="flex-start">
            <Text
              isBold={true}
              css={css`
                font-size: 18px;
                line-height: 122%;
              `}
            >
              {firstName}
              {' '}
              {lastName}
            </Text>
            <Text colour={ColourPalette.GREY_600}>
              {professionalTitle}
            </Text>
          </Box>
        </Box>
        <Box direction="row">
          {
            tags.map((tag, index) => {
              const { text, colour } = tag;
              return (
                <Tag
                  key={`tag-item-${index}`}
                  colour={colour.hex}
                  css={css`
                    margin-right: 4px;
                  `}
                >
                  {text}
                </Tag>
              );
            })
          }
        </Box>
      </Box>
      <Divider />
      <Text
        colour={ColourPalette.GREY_600}
        css={css`
          padding-top: 50px;
          padding-bottom: 28px;
        `}
      >
        {`${formattedDate} - ${timeAgo}`}
      </Text>
      <Markdown css={css`
        width: 100%;
      `}
      >
        {content}
      </Markdown>
    </Content>
  );
};

export default BlogPost;
