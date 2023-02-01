import { ReactElement } from 'react';
import { Page, PageSlug, homePageQuery } from '../graphql';
import { useQuery } from '../hooks';
import { ServerComponent } from '../types';
import Home from './home';

/**
 * The entry point for the home page route `/`, used to fetch the required
 * data and render the `Home` component passing said data as props
 *
 * @returns The `HomePage` component
 */
const HomePage: ServerComponent = async (): Promise<ReactElement> => {

  const { content } = await useQuery<Page<PageSlug.HOME>>(homePageQuery);
  return (
    <Home content={content} />
  );
};

export default HomePage;
