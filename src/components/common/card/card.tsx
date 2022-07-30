import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, BoxDirection, BoxJustify } from '../../../enums';
import { BaseProps } from '../../../types';
import { StyledCard } from './card.styled';

/**
 * The `Card` component props
 */
interface Props extends BaseProps {
  readonly direction?: BoxDirection;
  readonly alignment?: BoxAlignment;
  readonly justify?: BoxJustify;
}

/**
 * The common `Card` component used to render a card
 * which elevates and draws attention to content
 *
 * @param props The component props
 * @returns The `Card` component
 */
const Card: FunctionComponent<Props> = ({ className, direction, alignment, justify, children }): ReactElement<Props> => {
  return (
    <StyledCard
      className={className}
      direction={direction}
      alignment={alignment}
      justify={justify}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
