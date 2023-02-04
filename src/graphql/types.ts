/**
 * The page slug used for fetching page
 * data from the GraphQL API
 */
export type PageSlug = 'global' | 'home' | 'cv' | 'skills' | 'life-timeline' | 'blog' | 'brand';

/**
 * Describes the data for each page
 *
 * - Generic type `T` for the page `slug`
 */
export interface Page<T extends PageSlug> {
  readonly id: string;
  readonly name: string;
  readonly slug: T;
  readonly content: Extract<PageContent, BasePageContent<T>>;
  readonly createdDate: string;
  readonly updatedDate: string;
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
 * Describes the global page content which
 * is specific to the global page only
 */
export interface GlobalContent extends BasePageContent<'global'> {
  readonly footerText: string;
  readonly builtUsingText: string;
  readonly email: string;
  readonly emailText: string;
  readonly linkedInUrl: string;
  readonly stackOverflowUrl: string;
  readonly buyMeCoffeeUrl: string;
  readonly notionUrl: string;
  readonly notionText: string;
  readonly notFoundText: string;
  readonly notFoundImage: Asset;
  readonly me: Person;
}

/**
 * Describes the home page content which
 * is specific to the home page only
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
 * Describes the CV page content which
 * is specific to the CV page only
 */
export interface CVContent extends BasePageContent<'cv'> {
  readonly currentPositionText: string;
  readonly careerStartDate: string;
  readonly skillsText: string;
  readonly skills: Skill[];
  readonly lifeTimelineText: string;
  readonly lifeTimelineEvents: TimelineEvent[];
  readonly disclaimerText: string;
}

/**
 * Describes the skills page content which
 * is specific to the skills page only
 */
export interface SkillsContent extends BasePageContent<'skills'> {
  readonly disclaimerText: string;
  readonly skills: Skill[];
}

/**
 * Describes the life timeline page content which
 * is specific to the life timeline page only
 */
export interface LifeTimelineContent extends BasePageContent<'life-timeline'> {
  readonly timelineEvents: TimelineEvent[];
}

/**
 * Describes the brand page content which
 * is specific to the brand page only
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
 * Describes the blog page content which
 * is specific to the blog page only
 */
export interface BlogContent extends BasePageContent<'blog'> {
  readonly posts: BlogPost[];
}

/**
 * The union type for all page content types
 */
export type PageContent =
  | GlobalContent
  | HomeContent
  | CVContent
  | LifeTimelineContent
  | SkillsContent
  | BrandContent
  | BlogContent;

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
 * Describes a person which contains data about
 * a specific person such as their name and image
 */
export interface Person {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly professionalTitle: string;
  readonly image: Asset;
}

/**
 * Describes the colour which contains the colour data
 * in different formats such as it's HEX value
 */
export interface Colour {
  readonly hex: string;
  readonly css: string;
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
 * Describes a specific event
 * in a timeline
 */
export interface TimelineEvent {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
}

/**
 * Describes a specific blog post
 */
export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: Tag[];
  readonly author: Person;
  readonly publishedDate: string;
}

/**
 * Describes a specific tag
 */
export interface Tag {
  readonly id: string;
  readonly text: string;
  readonly colour: Colour;
}

/**
 * Describes the GraphQL search
 * variables used for queries
 */
export interface SearchVariables {
  readonly search?: string;
}
