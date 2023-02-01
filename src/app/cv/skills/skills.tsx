/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Header, Content, SkillModal, Grid, SkillCard, NoResults } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Text, SearchInput } from '../../../components/common';
import { ColourPalette } from '../../../enums';
import { Skill, SkillsContent } from '../../../graphql';
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
 * @returns The `Skills` component
 */
const Skills: FunctionComponent<Props> = ({ content, search = '' }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { push } = useRouter();
  const { disclaimerText, skills } = content;

  const [searchText, setSearchText] = useState<string>(search);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>();

  return (
    <>
      {
        (selectedSkill != null) && (() => {
          const { name, type, description, url, image } = selectedSkill;
          return (
            <SkillModal
              isOpen={modalOpen}
              name={name}
              type={type}
              description={description}
              url={url}
              imageUrl={image?.url}
              onClose={() => setModalOpen(false)}
              onClosed={() => setSelectedSkill(undefined)}
            />
          );
        })()
      }
      <Header title="Skills">
        <Breadcrumbs>
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
      </Header>
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

            push(`/cv/skills?${params.toString()}`);
          }}
          css={css`
            width: ${(screenSize === 'small') ? '100%' : '400px'};
          `}
        />
        {
          (skills.length > 0) && (
            <Text
              colour={ColourPalette.GREY_400}
              css={css`
                max-width: 460px;
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
            skills.map((skill, index) => {

              // Destructure the skill and return
              // the skill card component
              const { name, type, image } = skill;
              return (
                <SkillCard
                  key={`skill-item-${index}`}
                  name={name}
                  type={type}
                  imageUrl={image?.url}
                  onClick={() => {
                    setSelectedSkill(skill);
                    setModalOpen(true);
                  }}
                />
              );
            })
          }
        </Grid>
      </Content>
    </>
  );
};

export default Skills;
