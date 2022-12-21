import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { PageSlug } from '../graphql';
import { usePageQuery } from '../hooks';
import { BaseProps } from '../types';
import { StatusHandler } from '.';

/**
 * The `Global` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * Used to fetch the global page data
 * and handle it's query status
 *
 * @param props The component props
 * @returns The `Global` component
 */
const Global: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  const { status } = usePageQuery({
    slug: PageSlug.GLOBAL,
  });

  return (
    <StatusHandler status={status}>
      {children}
    </StatusHandler>
  );
};

export default Global;
