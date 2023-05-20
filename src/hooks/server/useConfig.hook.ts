/**
 * The `useConfig` hook response
 */
interface UseConfigResponse {
  readonly siteUrl: string;
  readonly graphqlApiUrl: string;
}

/**
 * Used to access the app config loaded from environment variables.
 * When running locally the `.env` file is loaded.
 *
 * _**WARNING:** This hook can only be used server-side_
 *
 * @returns The `useConfig` hook response
 * @example
 *
 * const { siteUrl, graphqlApiUrl } = useConfig();
 */
const useConfig = (): UseConfigResponse => {
  return {
    siteUrl: process.env.SITE_URL as string,
    graphqlApiUrl: process.env.GRAPHQL_API_URL as string,
  };
};

export default useConfig;
