import { FunctionComponent, ReactElement } from 'react';
import { StatusHandler, Header, Content } from '../..';
import { PageSlug } from '../../../graphql';
import { usePageQuery } from '../../../hooks';
import { StyledCurrentPosition } from './curriculumVitaeRoute.styled';

/**
 * Fetches the curriculum vitae page data and renders the
 * components that make up the app curriculum vitae page
 *
 * @returns The `CurriculumVitaeRoute` component
 */
const CurriculumVitaeRoute: FunctionComponent = (): ReactElement => {

  const { status } = usePageQuery({
    slug: PageSlug.CV,
  });

  return (
    <StatusHandler status={status}>
      <Header title="Curriculum Vitae" />
      <Content>
        <StyledCurrentPosition />
      </Content>
    </StatusHandler>
  );
};

export default CurriculumVitaeRoute;
