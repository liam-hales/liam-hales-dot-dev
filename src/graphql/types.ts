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
  readonly emailText: string;
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
 * Describes the curriculum vitae page content which
 * is specific to the curriculum vitae page only
 */
export interface CurriculumVitaePageContent extends BasePageContent {
  readonly slug: PageSlug.CV;
  readonly currentPositionText: string;
  readonly careerStartDate: Moment;
  readonly companyStartDate: Moment;
  readonly lifeTimelineText: string;
  readonly lifeTimelineEvents: TimelineEvent[];
  readonly skillsText: string;
  readonly skills: Skill[];
  readonly disclaimerText: string;
}

/**
 * Describes the life timeline page content which
 * is specific to the life timeline page only
 */
export interface LifeTimelinePageContent extends BasePageContent {
  readonly slug: PageSlug.LIFE_TIMELINE;
  readonly timelineEvents: TimelineEvent[];
}

/**
 * Describes the skills page content which
 * is specific to the skills page only
 */
export interface SkillsPageContent extends BasePageContent {
  readonly slug: PageSlug.SKILLS;
  readonly disclaimerText: string;
  readonly skills: Skill[];
}

/**
 * The union type for all page content types.
 * Generic type `T` for the page slug
 */
export type PageContent<T extends PageSlug> =
  T extends PageSlug.GLOBAL ? GlobalPageContent :
  T extends PageSlug.HOME ? HomePageContent :
  T extends PageSlug.CV ? CurriculumVitaePageContent :
  T extends PageSlug.LIFE_TIMELINE ? LifeTimelinePageContent :
  T extends PageSlug.SKILLS ? SkillsPageContent :
  never;

/**
 * Describes the asset which contains data
 * about the uploaded asset such as the URL
 */
export interface Asset {
  readonly id: string;
  readonly fileName: string;
  readonly url: string;
}

/**
 * Describes a specific event
 * in a timeline
 */
export interface TimelineEvent {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly date: Moment;
}

/**
 * Describes a specific skill
 */
export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly description: string;
  readonly url: string;
  readonly image?: Asset;
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
