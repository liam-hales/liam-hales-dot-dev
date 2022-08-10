import { styled } from '@mui/material';

/**
 * The styled `div` component used for
 * the `SafeArea` component
 */
export const StyledDiv = styled('div')`
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;
