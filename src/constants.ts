/**
 * Describes all possible navigation keys
 * used to build the `NavKey` type
 */
export const navKeys = [
  'home',
  'cv',
  'blog',
  'brand',
] as const;

/**
 * Describes all possible navigation routes
 * used to build the `NavRoute` type
 */
export const navRoutes = [
  '/',
  '/cv',
  '/cv/skills',
  '/blog',
  '/brand',
] as const;

/**
 * Describes all possible code languages used
 * to build the `CodeLanguage` type
 */
export const codeLanguages = [
  'ts',
  'tsx',
] as const;
