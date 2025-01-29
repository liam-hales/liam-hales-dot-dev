/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { useDate } from '../../hooks';
import { BaseProps } from '../../types';
import { Card, Box, Tag, Text, Image, Markdown } from '../common';
import { BlogPost } from '../../graphql';

/**
 * The `BlogPostCard` component props
 */
interface Props extends BaseProps, Omit<BlogPost, 'id' | 'content'> {}

/**
 * Renders a blog post card used to
 * display the blog post information
 *
 * @param props The component props
 * @returns The `BlogPostCard` component
 */
const BlogPostCard: FunctionComponent<Props> = ({ className, title, description, tags, author, publishedDate }): ReactElement<Props> => {

  const { from } = useDate();
  const {
    firstName,
    lastName,
    professionalTitle,
    image,
  } = author;

  const formattedDate = from(publishedDate).format('MMMM YYYY');
  const timeAgo = from(publishedDate).fromNow();

  return (
    <Card
      className={className}
      alignment="flex-start"
      css={css`
        padding: 20px;
      `}
    >
      <Text colour={ColourPalette.GREY_600}>
        {`${formattedDate} - ${timeAgo}`}
      </Text>
      <Text
        isBold={true}
        css={css`
          padding-top: 10px;
          padding-bottom: 16px;
          font-size: 26px;
          line-height: 122%;
        `}
      >
        {title}
      </Text>
      <Box
        direction="row"
        css={css`
          padding-bottom: 10px;
        `}
      >
        {
          tags.map((tag) => {
            const { id, text, colour } = tag;
            return (
              <Tag
                key={`tag-${id}`}
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
      <Markdown>
        {description}
      </Markdown>
      <Box
        direction="row"
        css={css`
          padding-top: 8px;
        `}
      >
        <Image
          path={image.url}
          alt={`${firstName} ${lastName}`}
          width={32}
          height={32}
          css={css`
            margin-right: 12px;
            border-radius: 50%;
          `}
        />
        <Box alignment="flex-start">
          <Text
            isBold={true}
            css={css`
              line-height: 122%;
            `}
          >
            {firstName}
            {' '}
            {lastName}
          </Text>
          <Text
            colour={ColourPalette.GREY_600}
            css={css`
              font-size: 11px;
            `}
          >
            {professionalTitle}
          </Text>
        </Box>
      </Box>
    </Card>
  );
};

export default BlogPostCard;
