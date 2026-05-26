import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { Check, LoaderCircle, X } from 'lucide-react';
import { LoaderStatus } from '../types';

/**
 * The `Loader` component props
 */
interface Props extends BaseProps {
  readonly status: LoaderStatus;
  readonly children: string;
}

/**
 * Used to render a status icon
 * followed by some text
 *
 * @param props The component props
 * @returns The `Loader` component
 */
const Loader: FunctionComponent<Props> = ({ className, status, children }): ReactElement<Props> => {
  return (
    <div className={`${className ?? ''} flex flex-row items-center gap-x-2`}>
      {
        (status === 'loading') && (
          <LoaderCircle
            className="text-content-secondary animate-spin"
            size={14}
          />
        )
      }
      {
        (status === 'success') && (
          <Check
            className="text-green-600"
            size={14}
          />
        )
      }
      {
        (status === 'error') && (
          <X
            className="text-red-600"
            size={14}
          />
        )
      }
      <p className="text-content-secondary text-sm pt-0.5">
        {children}
      </p>
    </div>
  );
};

export default Loader;
