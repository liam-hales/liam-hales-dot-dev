import { FunctionComponent, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavRoute } from '../enums';
import {
  HomeRoute,
  CurriculumVitaeRoute,
  LifeTimelineRoute,
  SkillsRoute,
  BrandRoute,
} from './route';
import { ComingSoon, NotFound } from '.';

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
          <BrandRoute />
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
