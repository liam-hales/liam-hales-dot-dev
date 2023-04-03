import { Metadata } from 'next';
import { Page, PageSlug, SearchVariables } from '../../graphql';
import { useQuery } from '../../hooks/server';
import { BuildPageMetadataOptions, PageProps } from '../../types';
import { openGraphMetadata } from '.';

/**
 * Used to build the function that generates the page metadata
 * which is rendered within the page `<head/>` element.
 *
 * _**NOTE:** This function can only be used server-side_
 *
 * @param query The GraphQL page query
 * @param searchable To determine if the page query is searchable
 *
 * @returns The page metadata builder
 */
const buildPageMetadata = <T extends PageSlug>(
  query: string,
  options: BuildPageMetadataOptions = {},
) => {
  return async ({ searchParams = {} }: PageProps): Promise<Metadata> => {

    const { search = '' } = searchParams;
    const { searchable = false } = options;

    const { metadata } = await useQuery<Page<T>, SearchVariables>(query, {
      ...(searchable === true) && {
        variables: {
          search: search,
        },
      },
    });

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
