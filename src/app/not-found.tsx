import { redirect, RedirectType } from 'next/navigation';
import { FunctionComponent } from 'react';

/**
 * The top level not found component used to redirect
 * the user back to `/` for any unknown routes
 *
 * @returns Nothing, the user is redirected
 */
const NotFound: FunctionComponent = (): never => {
  redirect('/', RedirectType.replace);
};

export default NotFound;
