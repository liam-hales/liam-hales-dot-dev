import { ReactElement, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Footer, Nav, SafeArea, BackgroundParticles } from '../components';
import { AnimationProvider, ThemeProvider } from '../providers';
import { BaseProps, AsyncComponent } from '../types';
import { urbanist, firaCode } from '../fonts';
import { Page, globalPageQuery } from '../graphql';
import { useDevice, useQuery } from '../hooks/server';
import { generateMetadata } from './metadata';

/**
 * Forces the layout to be dynamic which is required when using `headers`
 * from `next/headers` to avoid a `DYNAMIC_SERVER_USAGE` error
 */
export const dynamic = 'force-dynamic';

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
 * @param props The component props
 * @returns The `AppLayout` component
 */
const AppLayout: AsyncComponent<Props> = async ({ children }): Promise<ReactElement<Props>> => {

  const { deviceType } = useDevice();
  const { content } = await useQuery<Page<'global'>>(globalPageQuery);

  return (
    <html
      lang="en"
      className={`${urbanist.className} ${firaCode.className}`}
    >
      <body>
        <Analytics />
        <ThemeProvider>
          <AnimationProvider>
            <BackgroundParticles>
              <SafeArea>
                <Nav
                  deviceType={deviceType}
                  content={content}
                >
                  {children}
                  <Footer content={content} />
                </Nav>
              </SafeArea>
            </BackgroundParticles>
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
