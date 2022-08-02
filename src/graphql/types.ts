import { Moment } from 'moment';
import { PageSlug } from './enums';

/**
 * Describes the data for each page.
 * Generic type `T` for the page slug
 */
export interface PageData<T extends PageSlug = never> {
  readonly id: string;
  readonly name: string;
  readonly slug: PageSlug;
  readonly content: PageContent<T>;
}

/**
 * Describes the base content for each page.
 * Each page content should `extends` this
 */
export interface BasePageContent {
  readonly slug: PageSlug;
}

/**
 * Describes the global page content which
 * is used for each page within the app
 */
export interface GlobalPageContent extends BasePageContent {
  readonly slug: PageSlug.GLOBAL;
  readonly footerText: string;
  readonly builtUsingText: string;
  readonly email: string;
  readonly linkedInUrl: string;
  readonly stackOverflowUrl: string;
  readonly buyMeCoffeeUrl: string;
  readonly shayanRastegarUrl: string;
  readonly notFoundText: string;
  readonly notFoundImage: Asset;
  readonly meImage: Asset;
}

/**
 * Describes the home page content which
 * is specific to the home page only
 */
export interface HomePageContent extends BasePageContent {
  readonly slug: PageSlug.HOME;
  readonly headerImage: Asset;
  readonly headerOverlayImage: Asset;
  readonly aboutMeText: string;
  readonly careerStartDate: Moment;
  readonly frontendText: string;
  readonly backendText: string;
  readonly designText: string;
  readonly proStatementText: string;
  readonly stillInterestedText: string;
}

/**
 * The union type for all page content types.
 * Generic type `T` for the page slug
 */
export type PageContent<T extends PageSlug> =
  T extends PageSlug.GLOBAL ? GlobalPageContent :
    T extends PageSlug.HOME ? HomePageContent :
      never;

/**
 * Describes the image asset which is used
 * within the page data or content
 */
export interface Asset {
  readonly fileName: string;
  readonly url: string;
}

/**
 * Describes the page variables used
 * for fetching the page data.
 *
 * Generic type `T` for the page slug
 */
export type PageVariables<T extends PageSlug> =
  {
    readonly slug: T;
  }
  & (
    T extends PageSlug.BLOG
      ? {
        readonly blogPostSlug?: string;
      }
      : unknown
  );
