import { FunctionComponent, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IconId } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent, useScreen } from '../../hooks';
import { BaseProps } from '../../types';
import { Grid, SkillCard } from '..';
import { StyledSearchInput } from './skills.styled';

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

  const { screenSize } = useScreen();
  const { skills } = usePageContent({
    slug: PageSlug.SKILLS,
  });

  return (
    <div className={className}>
      <StyledSearchInput
        value={params.get('search') ?? ''}
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
      <Grid>
        {
          skills.map((skill) => {

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
      </Grid>
    </div>
  );
};

export default Skills;