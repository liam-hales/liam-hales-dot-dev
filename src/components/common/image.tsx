/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import NextImage from 'next/image';
import { BaseProps } from '../../types';
import { withMotion } from '../../helpers';

/**
 * The `Image` component props
 */
interface Props extends BaseProps<HTMLImageElement> {
  readonly path: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
}

/**
 * The common `Image` component used to
 * render images within the app
 *
 * @param props The component props
 * @returns The `Image` component
 */
const Image: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    reference,
    className,
    path,
    alt,
    width,
    height,
  } = props;

  return (
    <NextImage
      ref={reference}
      className={className}
      src={path}
      alt={alt}
      width={width}
      height={height}
      fill={(width == null && height == null)}
      quality={100}
      css={css`
        object-fit: cover;
      `}
    />
  );
};

export default Image;
