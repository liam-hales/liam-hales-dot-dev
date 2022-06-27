import { Moment } from 'moment';
import { PageSlug } from './enums';

/**
 * Describes the data for each page.
 * Generic type `T` for the page slug
 */
export interface PageData<T extends PageSlug = never> {
  id: string;
  name: string;
  slug: PageSlug;
  content: PageContent<T>;
}

/**
 * Describes the base content for each page.
 * Each page content should `extends` this
 */
export interface BasePageContent {
  slug: PageSlug;
}

/**
 * Describes the global page content which
 * is used for each page within the app
 */
export interface GlobalPageContent extends BasePageContent {
  slug: PageSlug.GLOBAL;
  footerText: string;
  builtUsingText: string;
  email: string;
  linkedInUrl: string;
  stackOverflowUrl: string;
  buyMeCoffeeUrl: string;
  meImage: Asset;
}

/**
 * Describes the home page content which
 * is specific to the home page only
 */
export interface HomePageContent extends BasePageContent {
  slug: PageSlug.HOME;
  aboutMeText: string;
  careerStartDate: Moment;
}

/**
 * The union type for all page content types.
 * Generic type `T` for the page slug
 */
export type PageContent<T extends PageSlug> =
  T extends PageSlug.GLOBAL ? GlobalPageContent :
    T extends PageSlug.HOME ? HomePageContent : never;

/**
 * Describes the image asset which is used
 * within the page data or content
 */
export interface Asset {
  fileName: string;
  url: string;
}

/**
 * Describes the page variables used
 * for fetching the page data.
 *
 * Generic type `T` for the page slug
 */
export type PageVariables<T extends PageSlug> =
  {
    slug: T;
  }
  & (
    T extends PageSlug.BLOG
      ? {
        blogPostSlug?: string;
      }
      : unknown
  );
