import { FunctionComponent, ReactElement } from 'react';
import { StyledDivider } from './divider.styled';

/**
 * Renders the divider used to split up compoonents
 * and separate content into groups
 *
 * @returns The `Divider` component
 */
const Divider: FunctionComponent = (): ReactElement => {
  return (
    <StyledDivider />
  );
};

export default Divider;
