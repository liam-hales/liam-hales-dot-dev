/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { Content, SkillModal, Grid, SkillCard, NoResults } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Text, SearchInput, Title, Divider } from '../../../components/common';
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
 * @param props The component props
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
              onStatusChange={(status) => {

                // Only reset the selected skill state
                // if the modal is closed
                if (status === 'closed') {
                  setSelectedSkill(undefined);
                }
              }}
            />
          );
        })()
      }
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
        <Divider />
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

              // Destructure the skill and return
              // the skill card component
              const { id, name, type, image } = skill;
              return (
                <SkillCard
                  key={`skill-${id}`}
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
