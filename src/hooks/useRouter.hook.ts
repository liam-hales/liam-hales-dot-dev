import { useNavigate } from 'react-router-dom';
import { NavRoute } from '../enums';
import { useNav } from '.';

/**
 * The `UseRouter` hook response
 */
interface UseRouterResponse {
  goTo: (route: NavRoute) => void;
  goForward: () => void;
  goBack: () => void;
}

/**
 * Used to access the router and perfom actions such as navigating
 * to a different route and going forward/back a page
 *
 * @returns The `useRouter` hook response
 * @example
 *
 * const { goTo, goForward, goBack } = useChangeRoute();
 * goTo(NavRoute.home);
 */
const useRouter = (): UseRouterResponse => {

  const navigate = useNavigate();
  const { navRoute } = useNav();

  const goTo = (route: NavRoute): void => {

    // Just return if the user is already on said route to avoid
    // scrolling to the top of a page they are already oon
    if (navRoute === route) {
      return;
    }

    window.scrollTo(0, 0);
    navigate(route);
  };

  const goForward = (): void => {
    navigate(1);
  };

  const goBack = (): void => {
    navigate(-1);
  };

  return {
    goTo: goTo,
    goForward: goForward,
    goBack: goBack,
  };
};

export default useRouter;
