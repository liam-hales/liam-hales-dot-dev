/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faFileCode,
  faPaintBrush,
  faCode,
  faServer,
  faFillDrip,
  faEnvelope,
  faCaretRight,
  faMagnifyingGlass,
  faXmark,
  faMessage,
  faCheck,
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faClone,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BaseProps } from '../../types';
import { ColourPalette, IconId } from '../../enums';

/**
 * The `Icon` component props
 */
interface Props extends BaseProps {
  readonly id: IconId;
  readonly colour?: ColourPalette;
}

/**
 * The common `Icon` component used to
 * render icons within the app
 *
 * @param props The component props
 * @returns The `Icon` component
 */
const Icon: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    className,
    id,
    colour = ColourPalette.BLUE,
  } = props;

  const iconMap: Record<IconId, IconDefinition> = {
    [IconId.HOME]: faHome,
    [IconId.DOCUMENT]: faFileCode,
    [IconId.MESSAGE]: faMessage,
    [IconId.PAINT_BRUSH]: faPaintBrush,
    [IconId.PAINT_FILL]: faFillDrip,
    [IconId.CODE]: faCode,
    [IconId.SERVER]: faServer,
    [IconId.ENVELOPE]: faEnvelope,
    [IconId.CARET_RIGHT]: faCaretRight,
    [IconId.ARROW_LEFT]: faArrowLeft,
    [IconId.ARROW_RIGHT]: faArrowRight,
    [IconId.MAGNIFYING_GLASS]: faMagnifyingGlass,
    [IconId.CROSS]: faXmark,
    [IconId.TICK]: faCheck,
    [IconId.COPY]: faClone,
    [IconId.ARROW_RIGHT_SQUARE]: faArrowUpRightFromSquare,
    [IconId.COPYRIGHT]: faCopyright,
    [IconId.LINKED_IN]: faLinkedin,
    [IconId.STACK_OVERFLOW]: faStackOverflow,
  };

  return (
    <FontAwesomeIcon
      className={className}
      icon={iconMap[id]}
      css={css`
        color: ${colour};
      `}
    />
  );
};

export default Icon;