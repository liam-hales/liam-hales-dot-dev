/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../../types';
import { ColourPalette, NavRoute } from '../../../enums';
import { useRouter } from '../../../hooks';
import { Text } from '..';

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
    <Text
      bold={true}
      hoverUnderline={active !== true}
      colour={
        (active === true)
          ? ColourPalette.WHITE
          : ColourPalette.GREY
      }
      onClick={
        (active === false)
          ? () => goTo(route)
          : undefined
      }
      css={css`
        font-size: 17px;
      `}
    >
      {children}
    </Text>
  );
};

export default BreadcrumbItem;
