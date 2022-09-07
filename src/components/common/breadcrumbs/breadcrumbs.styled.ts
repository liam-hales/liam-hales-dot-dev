import { styled, Breadcrumbs } from '@mui/material';
import { Icon } from '..';
import { ColourPalette } from '../../../enums';

/**
 * The styled `Breadcrumbs` component used
 * for the `Breadcrumbs` component
 */
export const StyledBreadcrumbs = styled(Breadcrumbs)`

  .MuiBreadcrumbs-separator {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

/**
 * The styled `Icon` component used for the
 * `Breadcrumbs` component separator icon
 */
export const StyledIcon = styled(Icon)`
  color: ${ColourPalette.BLUE};
`;
