import { gql } from 'graphql-request';

/**
 * The GraphQL fragment for the `Page` type used
 * within the different GraphQL page queries
 */
export const pageFragment = gql`
  fragment PageFields on Page {
    id
    slug
    name
    metadata {
      ...PageMetadataFields
    }
    createdDate: createdAt
    updatedDate: createdAt
  }
`;

/**
 * The GraphQL fragment for the `PageMetadata` type which can be
 * used within GraphQL documents and other fragments
 */
export const pageMetadataFragment = gql`
  fragment PageMetadataFields on PageMetadata {
    id
    title
    description
  }
`;

/**
 * The GraphQL fragment for the `Asset` type which can be
 * used within GraphQL documents and other fragments
 */
export const assetFragment = gql`
  fragment AssetFields on Asset {
    id
    fileName
    url
  }
`;

/**
 * The GraphQL fragment for the `Color` type which can be
 * used within GraphQL documents and other fragments
 */
export const colourFragment = gql`
  fragment ColourFields on Color {
    hex
    css
  }
`;

/**
 * The GraphQL fragment for the `Person` type which can be
 * used within GraphQL documents and other fragments
 */
export const personFragment = gql`
  fragment PersonFields on Person {
    id
    firstName
    lastName
    professionalTitle
    image {
      ...AssetFields
    }
  }
`;

/**
 * The GraphQL fragment for the `Skill` type which can be
 * used within GraphQL documents and other fragments
 */
export const skillFragment = gql`
  fragment SkillFields on Skill {
    id
    name
    type
    iconId
    url
  }
`;

/**
 * The GraphQL fragment for the `TimelinePointEvent` type which can be
 * used within GraphQL documents and other fragments
 */
export const timelinePointEventFragment = gql`
  fragment TimelinePointEventFields on TimelinePointEvent {
    __typename
    id
    title
    description
    date
  }
`;

/**
 * The GraphQL fragment for the `TimelinePeriodEvent` type which can be
 * used within GraphQL documents and other fragments
 */
export const timelinePeriodEventFragment = gql`
  fragment TimelinePeriodEventFields on TimelinePeriodEvent {
    __typename
    id
    title
    description
    startDate
    endDate
  }
`;

/**
 * The GraphQL fragment for the `Employment` type which can be
 * used within GraphQL documents and other fragments
 */
export const employmentFragment = gql`
  fragment EmploymentFields on Employment {
    id
    title
    description
    company
    startDate
    endDate
    skills {
      ...SkillFields
    }
  }
`;

/**
 * The GraphQL fragment for the `BlogPost` type which can be
 * used within GraphQL documents and other fragments
 */
export const blogPostFragment = gql`
  fragment BlogPostFields on BlogPost {
    id
    title
    description
    content
    tags {
      ...TagFields
    }
    author {
      ...PersonFields
    }
    publishedDate
  }
`;

/**
 * The GraphQL fragment for the `Tag` type which can be
 * used within GraphQL documents and other fragments
 */
export const tagFragment = gql`
  fragment TagFields on Tag {
    id
    text
    colour {
      ...ColourFields
    }
  }
`;
