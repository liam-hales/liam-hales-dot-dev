/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ImageRoundness } from '../../enums';
import { BaseProps } from '../../types';
import { Box } from '.';

/**
 * The image border radius map for the
 * dfferent `ImageRoundness` values
 */
const borderRadiusMap: Record<ImageRoundness, string> = {
  [ImageRoundness.NONE]: '0px',
  [ImageRoundness.ROUNDED]: '16px',
  [ImageRoundness.CIRCLE]: '50%',
};

/**
 * The `Image` component props
 */
interface Props extends BaseProps {
  readonly path: string;
  readonly alt: string;
  readonly roundness?: ImageRoundness;
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
    roundness = ImageRoundness.ROUNDED,
  } = props;

  return (
    <Box className={className}>
      <img
        src={path}
        alt={alt}
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: ${borderRadiusMap[roundness]};
        `}
      />
    </Box>
  );
};

export default Image;
