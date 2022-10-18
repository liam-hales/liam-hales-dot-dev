import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../../types';
import { Box } from '..';
import { BoxAlignment, BoxDirection } from '../../../enums';
import { StyledItemBox, StyledChildBox, StyledDot, StyledConnector } from './timeline.styled';

/**
 * The `Timeline` component props
 */
interface Props extends BaseProps<ReactElement[], true> {
  readonly trailingConnector?: boolean;
}

/**
 * Renders a timeline with each child
 * component being a timeline item
 *
 * @param props The component props
 * @returns The `Timeline` component
 */
const Timeline: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    trailingConnector = false,
    children,
  } = props;

  return (
    <Box
      className={className}
      alignment={BoxAlignment.START}
    >
      {
        children.map((child, index) => {
          return (
            <StyledItemBox
              key={`timeline-item-${index}`}
              direction={BoxDirection.ROW}
              alignment={BoxAlignment.START}
            >
              <StyledConnector
                first={index === 0}
                last={
                  (trailingConnector === false)
                    ? index === (children.length - 1)
                    : false
                }
              />
              <StyledDot />
              <StyledChildBox>
                {child}
              </StyledChildBox>
            </StyledItemBox>
          );
        })
      }
    </Box>
  );
};

export default Timeline;
