import { FunctionComponent, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BoxAlignment, IconId, TextAppearance } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent, useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { SkillCard } from '..';
import { searchFilter } from '../../helpers';
import { StyledBox, StyledSearchInput, StyledDisclaimerText, StyledGrid } from './skills.styled';

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

  const [params, setParams] = useSearchParams();
  const searchText = params.get('search') ?? '';

  const { screenSize } = useScreen();
  const { disclaimerText, skills } = usePageContent({
    slug: PageSlug.SKILLS,
  });

  return (
    <StyledBox
      className={className}
      alignment={BoxAlignment.START}
    >
      <StyledSearchInput
        defaultValue={searchText}
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
        screenSize={screenSize}
      />
      <StyledDisclaimerText appearance={TextAppearance.SECONDARY}>
        {disclaimerText}
      </StyledDisclaimerText>
      <StyledGrid>
        {
          skills
            .filter((skill) => searchFilter(searchText, skill, ['name']))
            .map((skill, index) => {

              // Destructure the skill and return
              // the skill card component
              const { name, type, image } = skill;
              return (
                <SkillCard
                  key={`skill-item-${index}`}
                  name={name}
                  type={type}
                  imageUrl={image?.url}
                />
              );
            })
        }
      </StyledGrid>
    </StyledBox>
  );
};

export default Skills;
