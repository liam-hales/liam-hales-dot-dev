/**
 * The `useConfig` hook response
 */
interface UseConfigResponse {
  readonly apiUrl: string;
}

/**
 * Used to access the app config
 * loaded in via the `.env` file
 *
 * @returns The `useConfig` hook response
 * @example
 *
 * const { apiUrl } = useConfig();
 */
const useConfig = (): UseConfigResponse => {
  return {
    apiUrl: process.env.REACT_APP_API_URL as string,
  };
};

export default useConfig;
