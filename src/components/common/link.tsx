/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode, HTMLAttributeAnchorTarget } from 'react';
import { css } from '@emotion/react';
import NextLink, { LinkProps } from 'next/link';
import { BaseProps } from '../../types';
import { withRef } from '../../helpers';

/**
 * The `Link` component props
 */
interface Props extends LinkProps, BaseProps<HTMLAnchorElement> {
  readonly target?: HTMLAttributeAnchorTarget;
  readonly children: ReactNode;
}

/**
 * Used for client-side transitions between routes. Uses the
 * `Link` component from `next/link` under the hood
 *
 * @param props The component props
 * @returns The `Link` component
 */
const Link: FunctionComponent<Props> = ({ internalRef, className, target, children, ...linkProps }): ReactElement<Props> => {
  return (
    <NextLink
      {...linkProps}
      ref={internalRef}
      className={className}
      target={target}
      css={css`
        color: inherit;
        text-decoration: none;
      `}
    >
      {children}
    </NextLink>
  );
};

export default withRef(Link);
