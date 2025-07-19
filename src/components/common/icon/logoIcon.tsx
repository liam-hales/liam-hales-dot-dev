/* eslint-disable import/no-unresolved */

/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, SVGProps } from 'react';
import { css } from '@emotion/react';
import { BaseProps, LogoIconId } from '../../../types';
import JavaScript from '~icons/logos/javascript';
import TypeScript from '~icons/logos/typescript-icon';
import Nodejs from '~icons/logos/nodejs-icon';
import NestJS from '~icons/logos/nestjs';
import Nextjs from '~icons/logos/nextjs-icon';
import React from '~icons/logos/react';
import TailwindCSS from '~icons/logos/tailwindcss-icon';
import Jest from '~icons/logos/jest';
import JSON from '~icons/logos/json';
import Swift from '~icons/logos/swift';
import Python from '~icons/logos/python';
import GraphQL from '~icons/logos/graphql';
import MaterialUI from '~icons/logos/material-ui';
import Vercel from '~icons/logos/vercel-icon';
import AWS from '~icons/logos/aws';
import Azure from '~icons/logos/microsoft-azure';
import Microsoft from '~icons/logos/microsoft-icon';
import Jira from '~icons/logos/jira';
import RaspberryPi from '~icons/logos/raspberry-pi';
import Sketch from '~icons/logos/sketch';
import Photoshop from '~icons/logos/adobe-photoshop';
import Illustrator from '~icons/logos/adobe-illustrator';
import MySQL from '~icons/logos/mysql';
import PostgreSQL from '~icons/logos/postgresql';
import HTML from '~icons/devicon/html5';
import CSS from '~icons/devicon/css3';
import Git from '~icons/devicon/git';
import MongoDB from '~icons/devicon/mongodb';
import VSCode from '~icons/devicon/vscode';
import Keras from '~icons/devicon/keras';
import OpenAI from '~icons/simple-icons/openai';
import { ColourPalette } from '../../../enums';

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
  css: CSS,
  react: React,
  tailwindcss: TailwindCSS,
  jest: Jest,
  git: Git,
  json: JSON,
  swift: Swift,
  python: Python,
  graphql: GraphQL,
  mui: MaterialUI,
  mysql: MySQL,
  postgresql: PostgreSQL,
  mongodb: MongoDB,
  keras: Keras,
  openai: OpenAI,
  vercel: Vercel,
  aws: AWS,
  azure: Azure,
  microsoft: Microsoft,
  vscode: VSCode,
  jira: Jira,
  raspberryPi: RaspberryPi,
  sketch: Sketch,
  photoshop: Photoshop,
  illustrator: Illustrator,
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
    <IconComponent
      className={className}
      css={css`
        color: ${ColourPalette.WHITE};
      `}
    />
  );
};

export default LogoIcon;
