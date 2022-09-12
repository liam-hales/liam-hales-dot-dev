import { FunctionComponent, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavRoute } from '../../enums';
import { ComingSoon, NotFound } from '..';
import { HomeRoute, CurriculumVitaeRoute, LifeTimelineRoute, SkillsRoute } from '../route';

/**
 * Used to handle each app navigation route
 * and render the corresponding component
 *
 * @returns The `Router` component
 */
const Router: FunctionComponent = (): ReactElement => {
  return (
    <Routes>
      <Route
        path={NavRoute.HOME}
        element={(
          <HomeRoute />
        )}
      />
      <Route
        path={NavRoute.CV}
        element={(
          <CurriculumVitaeRoute />
        )}
      />
      <Route
        path={NavRoute.LIFE_TIMELINE}
        element={(
          <LifeTimelineRoute />
        )}
      />
      <Route
        path={NavRoute.SKILLS}
        element={(
          <SkillsRoute />
        )}
      />
      <Route
        path={NavRoute.BLOG}
        element={(
          <ComingSoon />
        )}
      />
      <Route
        path={NavRoute.BRAND}
        element={(
          <ComingSoon />
        )}
      />
      <Route
        path="*"
        element={(
          <NotFound />
        )}
      />
    </Routes>
  );
};

export default Router;
