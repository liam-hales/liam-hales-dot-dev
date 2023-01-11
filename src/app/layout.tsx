import { ReactElement, ReactNode } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Footer, Nav, SafeArea } from '../components';
import { ThemeProvider } from '../providers';
import { BaseProps, ServerComponent } from '../types';
import { urbanist, firaCode } from '../fonts';
import { Page, PageSlug, globalPageQuery } from '../graphql';
import { useQuery } from '../hooks';

/**
 * Import the Font Awesome styles to make the
 * icons work correctlt with Next.js
 *
 * @docs https://fontawesome.com/docs/web/use-with/react/use-with#next-js
 */
import '@fortawesome/fontawesome-svg-core/styles.css';

// Turn off auto applying Font Awesome CSS
// Next.js doesnt allow this anyway
config.autoAddCss = false;

/**
 * The `AppLayout` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * The root layout component used as the
 * entry point to render the app
 *
 * @returns The `AppLayout` component
 */
const AppLayout: ServerComponent<Props> = async ({ children }): Promise<ReactElement<Props>> => {

  const { content } = await useQuery<Page<PageSlug.GLOBAL>>(globalPageQuery);
  return (
    <html
      lang="en"
      className={`${urbanist.className} ${firaCode.className}`}
    >
      <head />
      <body>
        <ThemeProvider>
          <SafeArea>
            <Nav content={content}>
              {children}
              <Footer content={content} />
            </Nav>
          </SafeArea>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default AppLayout;
