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
        value={searchText}
        placeholder="Search"
        iconId={IconId.MAGNIFYING_GLASS}
        onChange={(value) => {
          setParams({
            ...(value !== '') && {
              search: value,
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
            .map((skill) => {

              // Destructure the skill and return
              // the skill card component
              const { name, type, image } = skill;
              return (
                <SkillCard
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
