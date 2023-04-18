/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import type { ISourceOptions as ParticlesOptions } from 'tsparticles-engine';
import { css } from '@emotion/react';
import { BaseProps } from '../types';
import { ColourPalette } from '../enums';
import { Particles } from './common';

/**
 * The `BackgroundParticles` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * Used to render the background particle animation
 * that is rendered behind the whole UI
 *
 * @param props The component props
 * @returns The `BackgroundParticles` component
 */
const BackgroundParticles: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {

  /**
   * The options for the background
   * particle animation
   */
  const options: ParticlesOptions = {
    fpsLimit: 120,
    fullScreen: false,
    detectRetina: true,
    smooth: true,
    particles: {
      color: {
        value: ColourPalette.WHITE,
      },
      opacity: {
        random: true,
        value: {
          min: 0.02,
          max: 0.3,
        },
      },
      move: {
        enable: true,
        random: true,
        speed: 0.6,
        outMode: 'bounce',
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: {
          min: 1.2,
          max: 2.8,
        },
      },
      number: {
        value: 100,
      },
      collisions: {
        enable: true,
        mode: 'bounce',
        bounce: {
          horizontal: {
            value: 2,
          },
          vertical: {
            value: 2,
          },
        },
      },
      links: {
        enable: true,
        color: ColourPalette.WHITE,
        opacity: 0.12,
        distance: 100,
        width: 1,
      },
    },
  };

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Particles
        options={options}
        css={css`
          position: absolute;
          height: 100%;
          z-index: -1;
        `}
      />
      {children}
    </div>
  );
};

export default BackgroundParticles;
