import { FunctionComponent, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavRoute } from '../../enums';
import { HomeRoute, NotFound } from '..';

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
        path="*"
        element={(
          <NotFound />
        )}
      />
    </Routes>
  );
};

export default Router;
