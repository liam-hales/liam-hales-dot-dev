import { FunctionComponent, ReactElement } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFileCode, faPaintBrush, faComments, faCode, faServer, faFillDrip, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { BaseProps } from '../../../types';
import { IconId } from '../../../enums';
import { StyledIcon } from './icon.styled';

/**
 * The `Icon` component props
 */
interface Props extends BaseProps {
  readonly id: IconId;
  readonly onClick?: () => void;
}

/**
 * The common `Icon` component used to
 * render icons within the app
 *
 * @param props The component props
 * @returns The `Icon` component
 */
const Icon: FunctionComponent<Props> = ({ className, id, onClick }): ReactElement<Props> => {

  const iconMap: Record<IconId, IconDefinition> = {
    [IconId.HOME]: faHome,
    [IconId.DOCUMENT]: faFileCode,
    [IconId.MESSAGE]: faComments,
    [IconId.PAINT_BRUSH]: faPaintBrush,
    [IconId.PAINT_FILL]: faFillDrip,
    [IconId.CODE]: faCode,
    [IconId.SERVER]: faServer,
    [IconId.ENVELOPE]: faEnvelope,
    [IconId.LINKED_IN]: faLinkedin,
    [IconId.STACK_OVERFLOW]: faStackOverflow,
  };

  return (
    <StyledIcon
      className={className}
      icon={iconMap[id]}
      onClick={onClick}
      clickable={onClick != null}
    />
  );
};

export default Icon;
