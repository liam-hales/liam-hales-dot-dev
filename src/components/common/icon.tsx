/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, SVGProps } from 'react';
import { css } from '@emotion/react';
import { BaseProps, IconId } from '../../types';
import { ColourPalette } from '../../enums';
import Swatch from '~icons/heroicons/swatch-solid';
import ServerStack from '~icons/heroicons/server-stack-solid';
import Mail from '~icons/heroicons-solid/mail';
import DocumentDuplicate from '~icons/heroicons/document-duplicate-20-solid';
import Home from '~icons/heroicons/home-solid';
import Code from '~icons/heroicons-solid/code';
import ChevronRight from '~icons/heroicons-solid/chevron-right';
import ArrowLeft from '~icons/heroicons-solid/arrow-left';
import ArrowRight from '~icons/heroicons-solid/arrow-right';
import Search from '~icons/heroicons-solid/search';
import X from '~icons/heroicons-solid/x';
import Check from '~icons/heroicons-solid/check';
import ExternalLink from '~icons/heroicons-solid/external-link';
import Refresh from '~icons/heroicons/arrow-path-20-solid';
import Chatbox from '~icons/ion/chatbox';
import Document from '~icons/ion/document';
import Copyright from '~icons/ri/copyright-line';
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
  document: Document,
  message: Chatbox,
  colourSwatch: Swatch,
  code: Code,
  server: ServerStack,
  envelope: Mail,
  caretRight: ChevronRight,
  arrowleft: ArrowLeft,
  arrowRight: ArrowRight,
  magnifyingGlass: Search,
  cross: X,
  tick: Check,
  copy: DocumentDuplicate,
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
