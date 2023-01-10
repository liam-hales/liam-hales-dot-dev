import { ReactElement } from 'react';
import { Page, PageSlug, globalPageQuery, homePageQuery } from '../graphql';
import { useQuery } from '../hooks';
import { PageProps, ServerComponent } from '../types';
import Home from './home';

/**
 * The entry point for the home page route `/`, used to fetch the required
 * data and render the `Home` component passing said data as props
 *
 * @returns The `HomePage` component
 */
const HomePage: ServerComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const homePage = await useQuery<Page<PageSlug.HOME>>(homePageQuery);
  const globalPage = await useQuery<Page<PageSlug.GLOBAL>>(globalPageQuery);

  return (
    <Home
      homeContent={homePage.content}
      globalContent={globalPage.content}
    />
  );
};

export default HomePage;
