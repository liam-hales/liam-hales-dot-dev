import { FunctionComponent, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFileCode, faPaintBrush, faComments } from '@fortawesome/free-solid-svg-icons';
import { BaseProps } from '../../../types';
import { IconId } from '../../../enums';

/**
 * The `Icon` component props
 */
interface Props extends BaseProps {
  id: IconId;
  onClick?: () => void;
}

/**
 * The common `Icon` component used acorss
 * the app to render an icon
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
  };

  return (
    <FontAwesomeIcon
      className={className}
      icon={iconMap[id]}
      onClick={onClick}
    />
  );
};

export default Icon;
