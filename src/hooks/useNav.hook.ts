import { matchPath, useLocation } from 'react-router-dom';
import { NavKey, NavRoute } from '../enums';

/**
 * The `useNav` hook response
 */
interface UseNavResponse {
  readonly navKey?: NavKey;
  readonly navRoute?: NavRoute;
}

/**
 * Used to access vales about the app navigation
 * such as the `navKey` and `navRoute`
 *
 * @returns The `useNav` hook response
 */
const useNav = (): UseNavResponse => {
  const { pathname } = useLocation();

  // Attempt to match the path with one
  // of the nav key enum values
  const navKey = (pathname === '/')
    ? NavKey.HOME
    : Object
      .values(NavKey)
      .find((value) => pathname.includes(value));

  // Attempt to match the path with one
  // of the nav route enum values
  const navRoute = Object
    .values(NavRoute)
    .find((value) => matchPath(value, pathname));

  return {
    navKey: navKey,
    navRoute: navRoute,
  };
};

export default useNav;
