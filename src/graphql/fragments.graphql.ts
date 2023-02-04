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
 * The GraphQL fragment for the `Person` type used
 * within different queries and fragments
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

/**
 * The GraphQL fragment for the `BlogPost` type used
 * within different queries and fragments
 */
export const blogPostFragment = gql`
  fragment BlogPostFields on BlogPost {
    id
    title
    description
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
 * The GraphQL fragment for the `Tag` type used
 * within different queries and fragments
 */
export const tagFragment = gql`
  fragment TagFields on Tag {
    text
    colour {
      hex
      css
    }
  }
`;
