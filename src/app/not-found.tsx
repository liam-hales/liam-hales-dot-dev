import { ReactElement } from 'react';
import { NotFound } from '../components';
import { Page, PageSlug, globalPageQuery } from '../graphql';
import { useQuery } from '../hooks';
import { ServerComponent } from '../types';

/**
 * The app level not found boundry used to render the `NotFound`
 * component when a `NEXT_NOT_FOUND` exception is thrown
 *
 * @returns The `AppNotFound` component
 */
const AppNotFound: ServerComponent = async (): Promise<ReactElement> => {

  const { content } = await useQuery<Page<PageSlug.GLOBAL>>(globalPageQuery);
  return (
    <NotFound content={content} />
  );
};

export default AppNotFound;
