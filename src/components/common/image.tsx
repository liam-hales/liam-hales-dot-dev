/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../types';

/**
 * The `Image` component props
 */
interface Props extends BaseProps {
  readonly path: string;
  readonly alt: string;
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
    className,
    path,
    alt,
  } = props;

  return (
    <img
      className={className}
      src={path}
      alt={alt}
      css={css`
        object-fit: cover;
      `}
    />
  );
};

export default Image;
