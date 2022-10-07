import { styled } from '@mui/material';

/**
 * The styled `div` element used
 * for the `Grid` component
 */
export const StyledGrid = styled('div')`
  display: grid;
  row-gap: 12px;
  column-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;
