import { useNavigate } from 'react-router-dom';
import { NavRoute } from '../enums';
import { useNav } from '.';

/**
 * The `UseRouter` hook response
 */
interface UseRouterResponse {
  /**
   * Navigates to a given `route` and resets
   * the scroll position back to the top
   *
   * @param route The route
   */
  readonly goTo: (route: NavRoute) => void;
}

/**
 * Used to access the router and perfom actions
 * such as navigating to a given route
 *
 * @returns The `useRouter` hook response
 * @example
 *
 * const { goTo } = useChangeRoute();
 * goTo(NavRoute.home);
 */
const useRouter = (): UseRouterResponse => {

  const navigate = useNavigate();
  const { navRoute } = useNav();

  /**
   * Navigates to a given `route` and resets
   * the scroll position back to the top
   *
   * @param route The route
   */
  const goTo = (route: NavRoute): void => {

    // Just return if the user is already on said route to avoid
    // scrolling to the top of a page they are already oon
    if (navRoute === route) {
      return;
    }

    window.scrollTo(0, 0);
    navigate(route);
  };

  return {
    goTo: goTo,
  };
};

export default useRouter;
