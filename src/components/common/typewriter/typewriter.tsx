import { FunctionComponent, ReactElement } from 'react';
import TypewriterEffect, { TypewriterClass } from 'typewriter-effect';
import { BaseProps } from '../../../types';
import { StyledDiv } from './typewriter.styled';

/**
 * The `Typewriter` component props
 */
interface Props extends BaseProps {
  readonly onInit: (typewriter: TypewriterClass) => void;
}

/**
  * The common `Typewriter` component used to
  * render the typewriter text effect
  *
  * @param props The component props
  * @returns The `Typewriter` component
  */
const Typewriter: FunctionComponent<Props> = ({ onInit }): ReactElement<Props> => {
  return (
    <StyledDiv>
      <TypewriterEffect
        onInit={onInit}
        options={{
          cursor: '_',
          deleteSpeed: 30,
          wrapperClassName: 'TypewriterWrapper',
          cursorClassName: 'TypewriterCursor',
        }}
      />
    </StyledDiv>
  );
};

export default Typewriter;
