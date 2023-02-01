import { ReactElement } from 'react';
import { Page, PageSlug, brandPageQuery } from '../../graphql';
import { useQuery } from '../../hooks';
import { ServerComponent } from '../../types';
import Brand from './brand';

/**
 * The entry point for the brand page route `/brand`, used to fetch the required
 * data and render the `Brand` component passing said data as props
 *
 * @returns The `BlogPage` component
 */
const BrandPage: ServerComponent = async (): Promise<ReactElement> => {

  const { content } = await useQuery<Page<PageSlug.BRAND>>(brandPageQuery);
  return (
    <Brand content={content} />
  );
};

export default BrandPage;
