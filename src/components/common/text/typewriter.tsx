/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css, keyframes } from '@mui/material';
import TypewriterEffect, { TypewriterClass } from 'typewriter-effect';
import { BaseProps } from '../../../types';

/**
 * The keyframes animation
 * for the cursor
 */
const cursorAnimation = keyframes`
  from, to {
    opacity: 0;
  };
  50% {
    opacity: 1;
  };
`;

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
    <div css={css`
      .TypewriterCursor {
        font-weight: normal;
        animation-name: ${cursorAnimation};
        animation-duration: 800ms;
        animation-iteration-count: infinite;
      };
    `}
    >
      <TypewriterEffect
        onInit={onInit}
        options={{
          cursor: '_',
          deleteSpeed: 30,
          wrapperClassName: 'TypewriterWrapper',
          cursorClassName: 'TypewriterCursor',
        }}
      />
    </div>
  );
};

export default Typewriter;
