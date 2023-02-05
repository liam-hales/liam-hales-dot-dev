/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { useRouter } from 'next/navigation';
import { BlogPostCard, Content, Header } from '../../components';
import { BaseProps } from '../../types';
import { BlogContent } from '../../graphql';
import { useScreen } from '../../hooks';
import { Box, Link, SearchInput } from '../../components/common';

/**
 * The `Blog` component props
 */
interface Props extends BaseProps {
  readonly content: BlogContent;
  readonly search?: string;
}

/**
 * Used as the entry point for the blog page. Renders the
 * blog page components using the given `content` prop
 *
 * @returns The `Blog` component
 */
const Blog: FunctionComponent<Props> = ({ content, search = '' }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { push } = useRouter();
  const { posts } = content;

  const [searchText, setSearchText] = useState<string>(search);

  return (
    <>
      <Header title="Blog" />
      <Content
        alignment="flex-start"
        css={css`
          padding-top: 50px;
          padding-bottom: 100px;
          row-gap: 40px;
        `}
      >
        <SearchInput
          value={searchText}
          onChange={(value) => setSearchText(value)}
          onSearch={() => {

            // Define the search query params
            // based on the search text
            const params = new URLSearchParams({
              ...(searchText !== '') && {
                search: searchText,
              },
            });

            push(`/blog?${params.toString()}`);
          }}
          css={css`
            width: ${(screenSize === 'small') ? '100%' : '400px'};
          `}
        />
        <Box css={css`
          row-gap: 22px;
        `}
        >
          {
            posts.map((post, index) => {

              // Destructure the blog post and return
              // the blog post card component
              const { slug, title, description, tags, author, publishedDate } = post;
              return (
                <Link
                  key={`blog-post-item-${index}`}
                  href={`/blog/${slug}`}
                >
                  <BlogPostCard
                    title={title}
                    description={description}
                    tags={tags}
                    author={author}
                    publishedDate={publishedDate}
                  />
                </Link>
              );
            })
          }
        </Box>
      </Content>
    </>
  );
};

export default Blog;
