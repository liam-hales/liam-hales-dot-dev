import { usePathname } from 'next/navigation';
import { navKeys, navRoutes } from '../constants';
import { NavKey, NavRoute } from '../types';

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
 * @example
 *
 * const { navKey, navRoute } = useNav();
 */
const useNav = (): UseNavResponse => {
  const pathname = usePathname();

  // Attempt to match the path to one
  // of the nav keys and nav routes
  const navRoute = navRoutes.find((value) => pathname === value);
  const navKey = (pathname !== '/')
    ? navKeys.find((value) => pathname?.split('/')[1] === value)
    : 'home';

  return {
    navKey: navKey,
    navRoute: navRoute,
  };
};

export default useNav;
