import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { StyledBox, StyledImage } from './image.styled';

/**
 * The `Image` component props
 */
interface Props extends BaseProps {
  path: string;
  alt: string;
  circle?: boolean;
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
    <StyledBox
      className={className}
      circle={circle}
    >
      <StyledImage
        src={path}
        alt={alt}
      />
    </StyledBox>
  );
};

export default Image;
