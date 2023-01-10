/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { Header, Content, SkillModal, Grid, SkillCard, NoResults } from '../../../components';
import { Breadcrumbs, BreadcrumbItem, Input, Text } from '../../../components/common';
import { BoxAlignment, ColourPalette, IconId, NavRoute, ScreenSize } from '../../../enums';
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
const Skills: FunctionComponent<Props> = ({ content, search }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  const { disclaimerText, skills } = content;

  const [searchText, setSearchText] = useState<string>(search ?? '');
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
          <BreadcrumbItem route={NavRoute.CV}>
            Curriculum Vitae
          </BreadcrumbItem>
          <BreadcrumbItem
            route={NavRoute.SKILLS}
            isActive={true}
          >
            Skills
          </BreadcrumbItem>
        </Breadcrumbs>
      </Header>
      <Content
        alignment={BoxAlignment.START}
        css={css`
          padding-top: 50px;
          padding-bottom: 100px;
          row-gap: 40px;
        `}
      >
        <Input
          value={searchText}
          placeholder="Search"
          iconId={IconId.MAGNIFYING_GLASS}
          onChange={(value) => setSearchText(value.trim())}
          css={css`
            width: ${(screenSize === ScreenSize.SMALL) ? '100%' : '350px'};
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
              searchText={searchText}
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
