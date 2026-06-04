import { FunctionComponent, ReactElement } from 'react';
import { App } from '../components';

/**
 * The app page for the app, simply used
 * to render the `App` component
 *
 * _Note — The `App` needs to be rendered here so it is served with a `200` HTTP
 * status code, rendering `App` inside the `AppLayout` will result in a `404`_
 *
 * @returns The `AppPage` component
 */
const AppPage: FunctionComponent = (): ReactElement => {
  return (
    <App />
  );
};

export default AppPage;
