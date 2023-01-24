/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { IconType } from 'react-icons';
import {
  HiSwatch,
  HiServerStack,
  HiEnvelope,
  HiDocumentDuplicate,
} from 'react-icons/hi2';
import {
  HiHome,
  HiCode,
  HiChevronRight,
  HiArrowLeft,
  HiArrowRight,
  HiSearch,
  HiX,
  HiCheck,
  HiExternalLink,
} from 'react-icons/hi';
import { IoDocument, IoChatbox } from 'react-icons/io5';
import { RiCopyrightLine } from 'react-icons/ri';
import { SiStackoverflow, SiLinkedin, SiNotion, SiBuymeacoffee } from 'react-icons/si';
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

  const iconMap: Record<IconId, IconType> = {
    [IconId.HOME]: HiHome,
    [IconId.DOCUMENT]: IoDocument,
    [IconId.MESSAGE]: IoChatbox,
    [IconId.COLOUR_SWATCH]: HiSwatch,
    [IconId.CODE]: HiCode,
    [IconId.SERVER]: HiServerStack,
    [IconId.ENVELOPE]: HiEnvelope,
    [IconId.CARET_RIGHT]: HiChevronRight,
    [IconId.ARROW_LEFT]: HiArrowLeft,
    [IconId.ARROW_RIGHT]: HiArrowRight,
    [IconId.MAGNIFYING_GLASS]: HiSearch,
    [IconId.CROSS]: HiX,
    [IconId.TICK]: HiCheck,
    [IconId.COPY]: HiDocumentDuplicate,
    [IconId.EXTERNAL_LINK]: HiExternalLink,
    [IconId.COPYRIGHT]: RiCopyrightLine,
    [IconId.LINKED_IN]: SiLinkedin,
    [IconId.STACK_OVERFLOW]: SiStackoverflow,
    [IconId.BUY_ME_COFFEE]: SiBuymeacoffee,
    [IconId.NOTION]: SiNotion,
  };

  const IconComponent = iconMap[id];
  return (
    <IconComponent
      className={className}
      css={css`
        color: ${colour};
      `}
    />
  );
};

export default Icon;
