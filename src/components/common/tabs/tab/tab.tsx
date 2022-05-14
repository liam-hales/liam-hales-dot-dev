import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../../types';
import { StyledTab } from './tab.styled';

/**
 * The `Tab` component props
 */
interface Props extends BaseProps {
  value: string;
  onClick: () => void;
}

/**
 * The common `Tab` component used to render
 * a single tab for the `Tabs` component
 *
 * @param props The component props
 * @returns The `Tab` component
 */
const Tab: FunctionComponent<Props> = ({ value, onClick, children }): ReactElement<Props> => {
  return (
    <StyledTab
      value={value}
      label={children}
      onClick={onClick}
    />
  );
};

export default Tab;
