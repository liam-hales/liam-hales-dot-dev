import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { IconId } from '../../../enums';
import { Icon } from '..';
import { StyledBreadcrumbs } from './breadcrumbs.styled';

/**
 * The `Breadcrumbs` component props
 */
type Props = BaseProps;

/**
 * Renders breadcrumbs with each child
 * component being a breadcrumb item
 *
 * @param props The component props
 * @returns The `Breadcrumbs` component
 */
const Breadcrumbs: FunctionComponent<Props> = ({ className, children }): ReactElement<Props> => {
  return (
    <StyledBreadcrumbs
      className={className}
      separator={(
        <Icon id={IconId.CARET_RIGHT} />
      )}
    >
      {children}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
