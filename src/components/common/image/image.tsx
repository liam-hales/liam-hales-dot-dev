import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { StyledBox, StyledImage } from './image.styled';

/**
 * The `Image` component props
 */
interface Props extends BaseProps {
  path: string;
  alt: string;
}

/**
 * The common `Image` component used to
 * render images within the app
 *
 * @param props The component props
 * @returns The `Image` component
 */
const Image: FunctionComponent<Props> = ({ className, path, alt }): ReactElement<Props> => {
  return (
    <StyledBox className={className}>
      <StyledImage
        src={path}
        alt={alt}
      />
    </StyledBox>
  );
};

export default Image;
