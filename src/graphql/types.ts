import { LogoIconId } from '../types';

/**
 * The page slug used for fetching page
 * data from the GraphQL API
 */
export type PageSlug = 'global' | 'home' | 'cv' | 'skills' | 'life-timeline' | 'blog' | 'brand';

/**
 * Describes the GraphQL `Page` type which
 * contains data for each page
 *
 * - Generic type `T` for the page `slug`
 */
export interface Page<T extends PageSlug> {
  readonly id: string;
  readonly name: string;
  readonly slug: T;
  readonly metadata?: PageMetadata;
  readonly content: Extract<PageContent, BasePageContent<T>>;
  readonly createdDate: string;
  readonly updatedDate: string;
}

/**
 * Describes the GraphQL `PageMetadata` type which contains
 * data for the page metadata used for SEO
 */
export interface PageMetadata {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

/**
 * Describes the base content for each page which
 * each page content should `extends`
 *
 * - Generic type `T` for the page `slug`
 */
export interface BasePageContent<T extends PageSlug> {
  readonly slug: T;
}

/**
 * Describes the GraphQL `GlobalContent` type which
 * contains data for the global page content
 */
export interface GlobalContent extends BasePageContent<'global'> {
  readonly footerText: string;
  readonly email: string;
  readonly contactText: string;
  readonly linkedInUrl: string;
  readonly stackOverflowUrl: string;
  readonly githubUrl: string;
  readonly notionUrl: string;
  readonly notionText: string;
  readonly notFoundText: string;
  readonly notFoundImage: Asset;
  readonly me: Person;
}

/**
 * Describes the GraphQL `HomeContent` type which
 * contains data for the home page content
 */
export interface HomeContent extends BasePageContent<'home'> {
  readonly headerForegroundImage: Asset;
  readonly headerBackgroundImage: Asset;
  readonly shayanRastegarUrl: string;
  readonly me: Person;
  readonly aboutMeText: string;
  readonly careerStartDate: string;
  readonly frontendText: string;
  readonly backendText: string;
  readonly designText: string;
  readonly proStatementText: string;
  readonly stillInterestedText: string;
}

/**
 * Describes the GraphQL `CVContent` type which
 * contains data for the CV page content
 */
export interface CVContent extends BasePageContent<'cv'> {
  readonly skillsText: string;
  readonly skills: Skill[];
  readonly lifeTimelineText: string;
  readonly lifeTimelineEvents: TimelineEvent[];
  readonly disclaimerText: string;
}

/**
 * Describes the GraphQL `SkillsContent` type which
 * contains data for the skills page content
 */
export interface SkillsContent extends BasePageContent<'skills'> {
  readonly disclaimerText: string;
  readonly skills: Skill[];
}

/**
 * Describes the GraphQL `LifeTimelineContent` type which
 * contains data for the life timeline page content
 */
export interface LifeTimelineContent extends BasePageContent<'life-timeline'> {
  readonly timelineEvents: TimelineEvent[];
}

/**
 * Describes the GraphQL `BrandContent` type which
 * contains data for the brand page content
 */
export interface BrandContent extends BasePageContent<'brand'> {
  readonly logoText: string;
  readonly logoLetterLText: string;
  readonly logoReverseLetterLText: string;
  readonly logoBarText: string;
  readonly colourPaletteText: string;
  readonly typographyText: string;
}

/**
 * Describes the GraphQL `BlogContent` type which
 * contains data for the blog page content
 */
export interface BlogContent extends BasePageContent<'blog'> {
  readonly posts: BlogPost[];
}

/**
 * The union type for all
 * page content types
 */
export type PageContent =
  | GlobalContent
  | HomeContent
  | CVContent
  | LifeTimelineContent
  | SkillsContent
  | ExperienceContent
  | BrandContent
  | BlogContent;

/**
 * Describes the GraphQL `Asset` type which contains data
 * about the uploaded asset such as the file name and URL
 */
export interface Asset {
  readonly id: string;
  readonly fileName: string;
  readonly url: string;
}

/**
 * Describes the GraphQL `Person` type which contains data about
 * a specific person such as their name, professional title and image
 */
export interface Person {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly professionalTitle: string;
  readonly image: Asset;
}

/**
 * Describes the GraphQL `Color` type which contains the
 * colour data in different formats such as HEX
 */
export interface Colour {
  readonly hex: string;
  readonly css: string;
}

/**
 * Describes the GraphQL `Skill` type
 */
export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly iconId: LogoIconId;
  readonly url: string;
}

/**
 * Describes the GraphQL `TimelinePointEvent` type
 */
export interface TimelinePointEvent {
  readonly __typename: 'TimelinePointEvent';
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
}

/**
 * Describes the GraphQL `TimelinePeriodEvent` type
 */
export interface TimelinePeriodEvent {
  readonly __typename: 'TimelinePeriodEvent';
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly skills: Skill[];
}

/**
 * The union type for all
 * timeline event types
 */
export type TimelineEvent = TimelinePointEvent | TimelinePeriodEvent;

/**
 * Describes the GraphQL `BlogPost` type
 */
export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly content: string;
  readonly tags: Tag[];
  readonly author: Person;
  readonly publishedDate: string;
}

/**
 * Describes the GraphQL `Tag` type
 */
export interface Tag {
  readonly id: string;
  readonly text: string;
  readonly colour: Colour;
}

/**
 * Describes the GraphQL variables
 * used for searchable queries
 */
export interface SearchVariables {
  readonly search?: string;
}

/**
 * Describes the GraphQL variables
 * used for the blog post query
 */
export interface BlogPostVariables {
  readonly id: string;
}
