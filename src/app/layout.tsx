import { ReactElement, ReactNode } from 'react';
import { Footer, Nav, SafeArea } from '../components';
import { AnimationProvider, ThemeProvider } from '../providers';
import { BaseProps, ServerComponent } from '../types';
import { urbanist, firaCode } from '../fonts';
import { Page, globalPageQuery } from '../graphql';
import { useDevice, useQuery } from '../hooks/server';
import { generateMetadata } from './metadata';

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
          <AnimationProvider>
            <SafeArea>
              <Nav
                deviceType={deviceType}
                content={content}
              >
                {children}
                <Footer content={content} />
              </Nav>
            </SafeArea>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default AppLayout;
export {
  generateMetadata,
};
