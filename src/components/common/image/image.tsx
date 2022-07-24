import { FunctionComponent, ReactElement } from 'react';
import { Box } from '..';
import { BaseProps } from '../../../types';
import { StyledImage } from './image.styled';

/**
 * The `Image` component props
 */
interface Props extends BaseProps {
  readonly path: string;
  readonly alt: string;
  readonly circle?: boolean;
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
    circle = false,
  } = props;

  return (
    <Box className={className}>
      <StyledImage
        src={path}
        alt={alt}
        circle={circle}
      />
    </Box>
  );
};

export default Image;
