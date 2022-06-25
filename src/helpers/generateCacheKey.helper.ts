/**
 * Used to generate a query cache key by
 * base64 encoding the query variables
 *
 * @param variables The variables
 * @returns The query cache key
 * @example
 *
 * const cacheKey = generateCacheKey({ ... });
 */
const generateCacheKey = <T extends Record<keyof T, unknown>>(variables: T): string => {

  // Stringify and base64 encode the variables
  // to generate the cache key for the query
  const keyData = JSON.stringify(variables);
  const cacheKey = window.btoa(keyData);

  return cacheKey;
};

export default generateCacheKey;
