/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useMemo, useState } from 'react';
import { css } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { BoxAlignment, IconId, ColourPalette, ScreenSize } from '../../enums';
import { PageSlug, Skill } from '../../graphql';
import { usePageContent, useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { SkillModal, SkillCard, Grid, NoResults } from '..';
import { searchFilter } from '../../helpers';
import { Box, Text, Input } from '../common';

/**
 * The `Skills` component props
 */
type Props = BaseProps;

/**
 * Renders the skills for the skills page which
 * is rendered within the `SkillsRoute` component
 *
 * @param props The component props
 * @returns The `Skills` component
 */
const Skills: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>();

  const [params, setParams] = useSearchParams();
  const searchText = params.get('search') ?? '';

  const { screenSize } = useScreen();
  const { disclaimerText, skills } = usePageContent({
    slug: PageSlug.SKILLS,
  });

  const filteredSkills = useMemo(() => {
    return skills
      .filter((skill) => searchFilter(searchText, skill, ['name']))
      .sort((a, b) => {

        // Only sort into alphabetical order
        // if the user is searching
        return (searchText !== '')
          ? a.name.localeCompare(b.name)
          : 0;
      });
  }, [
    skills,
    searchText,
  ]);

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
      <Box
        className={className}
        alignment={BoxAlignment.START}
        css={css`
          row-gap: 40px;
        `}
      >
        <Input
          value={searchText}
          placeholder="Search"
          delay={500}
          iconId={IconId.MAGNIFYING_GLASS}
          onChange={(value) => {

            // Trim the value and set the correct query params
            // or clearing them if the value is an empty string
            const trimmed = value.trim();
            setParams({
              ...(trimmed !== '') && {
                search: trimmed,
              },
            });
          }}
          css={css`
            width: ${(screenSize === ScreenSize.SMALL) ? '100%' : '350px'};
          `}
        />
        {
          (filteredSkills.length > 0) && (
            <Text
              colour={ColourPalette.GREY_400}
              css={css`
                max-width: 450px;
              `}
            >
              {disclaimerText}
            </Text>
          )
        }
        {
          (filteredSkills.length === 0) && (
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
          width: 100%;`}
        >
          {
            filteredSkills.map((skill, index) => {

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
      </Box>
    </>
  );
};

export default Skills;
