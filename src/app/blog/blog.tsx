/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { BlogPostCard, Content, NoResults } from '../../components';
import { BaseProps } from '../../types';
import { BlogContent } from '../../graphql';
import { useScreen } from '../../hooks';
import { Box, Link, SearchInput, Title } from '../../components/common';

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
 * @param props The component props
 * @returns The `Blog` component
 */
const Blog: FunctionComponent<Props> = ({ content, search = '' }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { push } = useRouter();
  const { posts } = content;

  const [searchText, setSearchText] = useState<string>(search);

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
          padding-bottom: 50px;
        `}
      >
        Blog
      </Title>
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
          margin-top: 50px;
          margin-bottom: 40px;
        `}
      />
      {
        (posts.length === 0) && (
          <NoResults
            searchText={search}
            css={css`
              padding-top: 26px;
              align-self: center;
            `}
          />
        )
      }
      <Box css={css`
        row-gap: 22px;
      `}
      >
        {
          posts.map((post) => {

            // Destructure the blog post and return
            // the blog post card component
            const { id, title, description, tags, author, publishedDate } = post;
            return (
              <Link
                key={`blog-post-${id}`}
                href={`/blog/post?id=${id}`}
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
  );
};

export default Blog;
