'use client';

import { FunctionComponent, ReactElement, SVGProps } from 'react';
import { BaseProps, LogoIconId } from '../../../types';
import JavaScript from '~icons/logos/javascript';
import TypeScript from '~icons/logos/typescript-icon';
import Nodejs from '~icons/logos/nodejs-icon';
import NestJS from '~icons/logos/nestjs';
import Nextjs from '~icons/logos/nextjs-icon';
import React from '~icons/logos/react';
import HTML from '~icons/vscode-icons/file-type-html';

/**
 * The `LogoIcon` component props
 */
interface Props extends BaseProps {
  readonly id: LogoIconId;
}

/**
 * The map between the `LogoIconId` and the
 * logo icon component to render
 */
const iconMap: Record<LogoIconId, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  javascript: JavaScript,
  typescript: TypeScript,
  nodejs: Nodejs,
  nestjs: NestJS,
  nextjs: Nextjs,
  html: HTML,
  react: React,
};

/**
 * The common `LogoIcon` component used to
 * render logo icons within the app
 *
 * @param props The component props
 * @returns The `LogoIcon` component
 */
const LogoIcon: FunctionComponent<Props> = ({ className, id }): ReactElement<Props> => {

  const IconComponent = iconMap[id];
  return (
    <IconComponent className={className} />
  );
};

export default LogoIcon;
