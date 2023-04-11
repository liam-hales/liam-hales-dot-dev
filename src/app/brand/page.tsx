import { ReactElement } from 'react';
import { Page, brandPageQuery } from '../../graphql';
import { useQuery } from '../../hooks/server';
import { PageProps, ServerComponent } from '../../types';
import { buildPageMetadata } from '../../helpers/server';
import Brand from './brand';

/**
 * The entry point for the brand page route `/brand`, used to fetch the required
 * data and render the `Brand` component passing said data as props
 *
 * @param props The component props
 * @returns The `BlogPage` component
 */
const BrandPage: ServerComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const { content } = await useQuery<Page<'brand'>>(brandPageQuery);
  return (
    <Brand content={content} />
  );
};

export default BrandPage;
export const generateMetadata = buildPageMetadata(brandPageQuery);
