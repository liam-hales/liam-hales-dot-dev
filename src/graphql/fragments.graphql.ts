import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `Page` type used
 * within different page queries
 */
export const pageFragment = gql`
  fragment PageFields on Page {
    id
    slug
    name
    createdDate: createdAt
    updatedDate: createdAt
  }
`;

/**
 * The GraphQL fragment for the `GlobalContent`
 * type used within the page query
 */
export const globalContentFragment = gql`
  fragment GlobalContentFields on GlobalContent {
    footerText
    builtUsingText
    email
    emailText
    linkedInUrl
    stackOverflowUrl
    buyMeCoffeeUrl
    notionUrl
    shayanRastegarUrl
    notFoundText
    notFoundImage {
      ...AssetFields
    }
    meImage {
      ...AssetFields
    }
  }
`;

/**
 * The GraphQL fragment for the `HomeContent`
 * type used within the page query
 */
export const homeContentFragment = gql`
  fragment HomeContentFields on HomeContent {
    headerForegroundImage {
      ...AssetFields
    }
    headerBackgroundImage {
      ...AssetFields
    }
    aboutMeText
    careerStartDate
    frontendText
    backendText
    designText
    proStatementText
    stillInterestedText
  }
`;

/**
 * The GraphQL fragment for the `CVContent`
 * type used within the page query
 */
export const cvContentFragment = gql`
  fragment CVContentFields on CVContent {
    currentPositionText
    careerStartDate
    skillsText
    skills {
      ...SkillFields
    }
    lifeTimelineText
    lifeTimelineEvents {
      ...TimelineEventFields
    }
    disclaimerText
  }
`;

/**
 * The GraphQL fragment for the `SkillsContent`
 * type used within the page query
 */
export const skillsContentFragment = gql`
  fragment SkillsContentFields on SkillsContent {
    disclaimerText
    skills(
      where: {
        name_contains: $search
      }
    ) {
      ...SkillFields
    }
  }
`;

/**
 * The GraphQL fragment for the `LifeTimelineContent`
 * type used within the page query
 */
export const lifeTimelineContentFragment = gql`
  fragment LifeTimelineContentFields on LifeTimelineContent {
    timelineEvents(
      where: {
        title_contains: $search
      }
    ) {
      ...TimelineEventFields
    }
  }
`;

/**
 * The GraphQL fragment for the `BrandContent`
 * type used within the page query
 */
export const brandContentFragment = gql`
  fragment BrandContentFields on BrandContent {
    logoText
    logoLetterLText
    logoReverseLetterLText
    logoBarText
    colourPaletteText
    typographyText
  }
`;

/**
 * The GraphQL fragment for the `Asset` type used
 * within different queries and fragments
 */
export const assetFragment = gql`
  fragment AssetFields on Asset {
    id
    fileName
    url
  }
`;

/**
 * The GraphQL fragment for the `Skill` type used
 * within different queries and fragments
 */
export const skillFragment = gql`
  fragment SkillFields on Skill {
    id
    name
    type
    description
    url
    image {
      ...AssetFields
    }
  }
`;

/**
 * The GraphQL fragment for the `TimelineEvent` type used
 * within different queries and fragments
 */
export const timelineEventFragment = gql`
  fragment TimelineEventFields on TimelineEvent {
    id
    title
    description
    date
  }
`;
