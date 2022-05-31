import { createContext } from 'react';
import { GraphQLState } from '../types';

/**
 * Stores the GraphQL state which is provided
 * by the `GraphQLProvider` component
 */
const GraphQLContext = createContext<GraphQLState | undefined>(undefined);

export default GraphQLContext;
