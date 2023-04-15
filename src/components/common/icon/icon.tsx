/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, SVGProps } from 'react';
import { css } from '@emotion/react';
import { BaseProps, IconId } from '../../../types';
import { ColourPalette } from '../../../enums';
import Swatch from '~icons/heroicons/swatch-solid';
import ServerStack from '~icons/heroicons/server-stack-solid';
import Home from '~icons/heroicons/home-solid';
import Refresh from '~icons/heroicons/arrow-path-20-solid';
import Mail from '~icons/heroicons-solid/mail';
import Code from '~icons/heroicons-solid/code';
import ChevronRight from '~icons/heroicons-solid/chevron-right';
import ExternalLink from '~icons/heroicons-solid/external-link';
import Search from '~icons/mingcute/search-2-fill';
import ArrowLeft from '~icons/mingcute/arrow-left-fill';
import ArrowRight from '~icons/mingcute/arrow-right-fill';
import Close from '~icons/mingcute/close-fill';
import Check from '~icons/mingcute/check-fill';
import Message from '~icons/mingcute/message-2-fill';
import File from '~icons/mingcute/file-fill';
import Copy from '~icons/mingcute/copy-fill';
import Copyright from '~icons/mingcute/copyright-line';
import StackOverflow from '~icons/simple-icons/stackoverflow';
import LinkedIn from '~icons/simple-icons/linkedin';
import Notion from '~icons/simple-icons/notion';
import GitHub from '~icons/simple-icons/github';

/**
 * The `Icon` component props
 */
interface Props extends BaseProps {
  readonly id: IconId;
  readonly colour?: ColourPalette;
}

/**
 * The map between the `IconId` and the
 * icon component to render
 */
const iconMap: Record<IconId, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  home: Home,
  document: File,
  message: Message,
  colourSwatch: Swatch,
  code: Code,
  server: ServerStack,
  envelope: Mail,
  caretRight: ChevronRight,
  arrowleft: ArrowLeft,
  arrowRight: ArrowRight,
  magnifyingGlass: Search,
  cross: Close,
  tick: Check,
  copy: Copy,
  externalLink: ExternalLink,
  refresh: Refresh,
  copyright: Copyright,
  linkedIn: LinkedIn,
  stackOverflow: StackOverflow,
  github: GitHub,
  notion: Notion,
};

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
