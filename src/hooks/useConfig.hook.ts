/**
 * The `useConfig` hook response
 */
interface UseConfigResponse {
  readonly apiUrl: string;
}

/**
 * Used to access the app config loaded from environment variables.
 * When running locally the `.env` file is loaded.
 *
 * _**NOTE:** This hook can only be used server-side_
 *
 * @returns The `useConfig` hook response
 * @example
 *
 * const { apiUrl } = useConfig();
 */
const useConfig = (): UseConfigResponse => {
  return {
    apiUrl: process.env.API_URL as string,
  };
};

export default useConfig;
