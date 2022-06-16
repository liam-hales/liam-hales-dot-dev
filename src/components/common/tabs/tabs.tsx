import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { StyledTabs } from './tabs.styled';

/**
 * The `Tabs` component props
 */
interface Props extends BaseProps {
  readonly value?: string;
}

/**
 * The common `Tabs` component used to
 * render a number of tabs
 *
 * @param props The component props
 * @returns The `Tabs` component
 */
const Tabs: FunctionComponent<Props> = ({ className, value, children }): ReactElement<Props> => {
  return (
    <StyledTabs
      className={className}
      value={value}
      TabIndicatorProps={
        {
          children: <span />,
        }
      }
    >
      {children}
    </StyledTabs>
  );
};

export default Tabs;
