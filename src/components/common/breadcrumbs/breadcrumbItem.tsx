/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../../types';
import { ColourPalette, NavRoute } from '../../../enums';
import { Link, Text } from '..';

/**
 * The `BreadcrumbItem` component props
 */
interface Props extends BaseProps {
  readonly route: NavRoute;
  readonly isActive?: boolean;
  readonly children: string;
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
    isActive = false,
    children,
  } = props;

  const textComponent = (
    <Text
      isBold={true}
      hasHoverUnderline={isActive !== true}
      colour={
        (isActive === true)
          ? ColourPalette.WHITE
          : ColourPalette.GREY_600
      }
      css={css`
        font-size: 17px;
      `}
    >
      {children}
    </Text>
  );

  if (isActive === true) {
    return (
      <>
        {textComponent}
      </>
    );
  }

  return (
    <Link
      href={route}
      passHref={true}
    >
      {textComponent}
    </Link>
  );
};

export default BreadcrumbItem;
