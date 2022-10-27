import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../../types';
import { NavRoute } from '../../../../enums';
import { useRouter } from '../../../../hooks';
import { StyledText } from './breadcrumbItem.styled';

/**
 * The `BreadcrumbItem` component props
 */
interface Props extends BaseProps {
  readonly route: NavRoute;
  readonly active?: boolean;
}

/**
 * Renders a breadcrumb item which should be
 * rendered within the `Breadcrumbs` component
 *
 * @param props The component props
 * @returns The `BreadcrumbItem` component
 */
const BreadcrumbItem: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    route,
    active = false,
    children,
  } = props;

  const { goTo } = useRouter();
  return (
    <StyledText
      bold={true}
      active={active}
      hoverUnderline={active !== true}
      onClick={
        (active === false)
          ? () => goTo(route)
          : undefined
      }
    >
      {children}
    </StyledText>
  );
};

export default BreadcrumbItem;
