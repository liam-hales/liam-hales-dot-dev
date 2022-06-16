import { FunctionComponent, ReactElement } from 'react';
import { QueryStatus } from '../../enums';
import { BaseProps } from '../../types';

/**
 * The `StatusHandler` component props
 */
interface Props extends BaseProps {
  readonly status: QueryStatus;
}

/**
 * Used to handle the query `status` and render the
 * correct components or children based on said status
 *
 * @param props The component props
 * @returns The `StatusHandler` component
 */
const StatusHandler: FunctionComponent<Props> = ({ status, children }): ReactElement<Props> | null => {

  // If the status is SUCCESS
  // Render the component children
  if (status === QueryStatus.SUCCESS) {
    return (
      <>
        {children}
      </>
    );
  }

  return null;
};

export default StatusHandler;
