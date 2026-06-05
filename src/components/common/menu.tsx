import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Menu as HeadlessMenu, MenuButton, MenuItems } from '@headlessui/react';
import { BaseProps } from '../../types';

/**
 * The `Menu` component props
 *
 * - Generic type `P` for the `button` component props
 */
interface Props<P extends object> extends BaseProps {
  readonly button: FunctionComponent<P>;
  readonly buttonProps: P;
  readonly children: ReactNode;
}

/**
 * Used to render a menu which can
 * be opened and closed
 *
 * @param props The component props
 * @returns The `Menu` component
 */
const Menu = <P extends object>({ className, button, buttonProps, children }: Props<P>): ReactElement<Props<P>> => {
  return (
    <HeadlessMenu>
      <MenuButton
        as={button}
        {...buttonProps}
      />
      <MenuItems
        className={`${className ?? ''} flex flex-col items-start gap-y-3 border border-solid border-outline bg-base rounded-xl [--anchor-gap:6px] p-2 no-scrollbar shadow-sm`}
        transition={true}
        anchor="top start"
      >
        {children}
      </MenuItems>
    </HeadlessMenu>
  );
};

export default Menu;
