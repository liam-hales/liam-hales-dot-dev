import { styled } from '@mui/material';

/**
 * The styled `div` element used for
 * the `Typewriter` component
 */
export const StyledDiv = styled('div')`
  @keyframes cursor {
    from, to {
      opacity: 0;
    };
    50% {
      opacity: 1;
    };
  };

  .Typewriter .TypewriterCursor {
    font-weight: normal;
    animation-name: cursor;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  };
`;
