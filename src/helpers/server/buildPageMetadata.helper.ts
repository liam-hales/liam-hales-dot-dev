import { Metadata } from 'next';
import { Page, PageSlug } from '../../graphql';
import { useQuery } from '../../hooks/server';
import { openGraphMetadata } from '.';

/**
 * Used to build the function that generates the page metadata
 * which is rendered within the page `<head/>` element.
 *
 * _**WARNING:** This function can only be used server-side_
 *
 * @param query The GraphQL page query
 * @returns The page metadata builder
 */
const buildPageMetadata = (query: string) => {
  return async (): Promise<Metadata> => {

    const { metadata } = await useQuery<Page<PageSlug>>(query);
    const openGraph = await openGraphMetadata();

    return {
      ...metadata,
      openGraph: {
        ...metadata,
        ...openGraph,
      },
    };
  };
};

export default buildPageMetadata;
