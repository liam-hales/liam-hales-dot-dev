import { Env } from '../enums';

/**
 * The `useConfig` hook response
 */
interface UseConfigResponse {
  readonly env: Env;
  readonly apiUrl: string;
}

/**
 * Used to access the app config
 * loaded in via the `.env` file
 *
 * @returns The `useConfig` hook response
 */
const useConfig = (): UseConfigResponse => {
  return {
    env: process.env.REACT_APP_ENV as Env,
    apiUrl: process.env.REACT_APP_API_URL as string,
  };
};

export default useConfig;
