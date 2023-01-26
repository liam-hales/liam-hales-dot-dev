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
import { BaseProps, IconId } from '../../types';
import { ColourPalette } from '../../enums';

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
    home: HiHome,
    document: IoDocument,
    message: IoChatbox,
    colourSwatch: HiSwatch,
    code: HiCode,
    server: HiServerStack,
    envelope: HiEnvelope,
    caretRight: HiChevronRight,
    arrowleft: HiArrowLeft,
    arrowRight: HiArrowRight,
    magnifyingGlass: HiSearch,
    cross: HiX,
    tick: HiCheck,
    copy: HiDocumentDuplicate,
    externalLink: HiExternalLink,
    copyright: RiCopyrightLine,
    linkedIn: SiLinkedin,
    stackOverflow: SiStackoverflow,
    buyMeCoffee: SiBuymeacoffee,
    notion: SiNotion,
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
