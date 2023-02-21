import { ReactElement, ReactNode } from 'react';
import { Footer, Nav, SafeArea } from '../components';
import { ThemeProvider } from '../providers';
import { BaseProps, ServerComponent } from '../types';
import { urbanist, firaCode } from '../fonts';
import { Page, globalPageQuery } from '../graphql';
import { useQuery } from '../hooks';
import { useDevice } from '../hooks/server';

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

  const { deviceType } = useDevice();
  const { content } = await useQuery<Page<'global'>>(globalPageQuery);

  return (
    <html
      lang="en"
      className={`${urbanist.className} ${firaCode.className}`}
    >
      <head />
      <body>
        <ThemeProvider>
          <SafeArea>
            <Nav
              deviceType={deviceType}
              content={content}
            >
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
