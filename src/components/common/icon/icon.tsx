import { FunctionComponent, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFileCode, faPaintBrush, faCode, faServer, faFillDrip, faEnvelope, faCaretRight, faMagnifyingGlass, faXmark, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { BaseProps } from '../../../types';
import { IconId } from '../../../enums';

/**
 * The `Icon` component props
 */
interface Props extends BaseProps {
  readonly id: IconId;
}

/**
 * The common `Icon` component used to
 * render icons within the app
 *
 * @param props The component props
 * @returns The `Icon` component
 */
const Icon: FunctionComponent<Props> = ({ className, id }): ReactElement<Props> => {

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
    [IconId.MAGNIFYING_GLASS]: faMagnifyingGlass,
    [IconId.CROSS]: faXmark,
    [IconId.LINKED_IN]: faLinkedin,
    [IconId.STACK_OVERFLOW]: faStackOverflow,
  };

  return (
    <FontAwesomeIcon
      className={className}
      icon={iconMap[id]}
    />
  );
};

export default Icon;
