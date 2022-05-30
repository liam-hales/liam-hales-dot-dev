import { GraphQLClient } from 'graphql-request';
import { ReactNode } from 'react';

/**
 * The props that all component
 * props should `extends`.
 *
 * Generic type `T` for the `children`
 */
export interface BaseProps<T = ReactNode> {
  readonly className?: string;
  readonly children?: T;
}

/**
 * Describes the GraphQL state for the
 * `GraphQLContext` and `GraphQLProvider`
 */
export interface GraphQLState {
  readonly client: GraphQLClient;
}
