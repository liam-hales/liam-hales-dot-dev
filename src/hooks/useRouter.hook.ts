import { useNavigate } from 'react-router-dom';
import { NavRoute } from '../enums';

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

  const goTo = (route: NavRoute): void => {
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
