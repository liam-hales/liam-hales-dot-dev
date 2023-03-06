import { ReactElement } from 'react';
import { Page, homePageQuery } from '../graphql';
import { useDevice, useQuery } from '../hooks/server';
import { PageProps, ServerComponent } from '../types';
import Home from './home';

/**
 * The entry point for the home page route `/`, used to fetch the required
 * data and render the `Home` component passing said data as props
 *
 * @returns The `HomePage` component
 */
const HomePage: ServerComponent<PageProps> = async (): Promise<ReactElement<PageProps>> => {

  const { deviceType } = useDevice();
  const { content } = await useQuery<Page<'home'>>(homePageQuery);

  return (
    <Home
      deviceType={deviceType}
      content={content}
    />
  );
};

export default HomePage;
