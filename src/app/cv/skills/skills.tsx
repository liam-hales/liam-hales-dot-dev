/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { Content, Grid, SkillCard, NoResults } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Text, SearchInput, Title, Link } from '../../../components/common';
import { ColourPalette } from '../../../enums';
import { SkillsContent } from '../../../graphql';
import { BaseProps } from '../../../types';
import { useScreen } from '../../../hooks';

/**
 * The `Skills` component props
 */
interface Props extends BaseProps {
  readonly content: SkillsContent;
  readonly search?: string;
}

/**
 * Used as the entry point for the CV skills page. Renders the
 * CV skills page components using the given `content` prop
 *
 * @param props The component props
 * @returns The `Skills` component
 */
const Skills: FunctionComponent<Props> = ({ content, search = '' }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { push } = useRouter();
  const { disclaimerText, skills } = content;

  const [searchText, setSearchText] = useState<string>(search);

  return (
    <Content
      alignment="flex-start"
      css={css`
        padding-top: 42px;
        padding-bottom: 100px;
      `}
    >
      <Title size="large">
        Skills
      </Title>
      <Breadcrumbs css={css`
        padding-top: 40px;
        padding-bottom: 50px;
      `}
      >
        <BreadcrumbItem route="/cv">
          Curriculum Vitae
        </BreadcrumbItem>
        <BreadcrumbItem
          route="/cv/skills"
          isActive={true}
        >
          Skills
        </BreadcrumbItem>
      </Breadcrumbs>
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

          push(`/cv/skills?${params.toString()}`);
        }}
        css={css`
          width: ${(screenSize === 'small') ? '100%' : '400px'};
          margin-top: 50px;
          margin-bottom: 40px;
        `}
      />
      {
        (skills.length > 0) && (
          <Text
            colour={ColourPalette.GREY_400}
            css={css`
              max-width: 460px;
              padding-bottom: 40px;
            `}
          >
            {disclaimerText}
          </Text>
        )
      }
      {
        (skills.length === 0) && (
          <NoResults
            searchText={search}
            css={css`
              padding-top: 26px;
              align-self: center;
            `}
          />
        )
      }
      <Grid css={css`
        width: 100%;
      `}
      >
        {
          skills.map((skill) => {

            // Destructure the skill and return the skill
            // card component wrapped in a `Link` component
            const { id, name, type, iconId, url } = skill;
            return (
              <Link
                key={`skill-${id}`}
                href={url}
                target="_blank"
                passHref={true}
                aria-label={name}
              >
                <SkillCard
                  name={name}
                  type={type}
                  iconId={iconId}
                />
              </Link>
            );
          })
        }
      </Grid>
    </Content>
  );
};

export default Skills;
