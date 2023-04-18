'use client';

import { FunctionComponent, ReactElement, useCallback } from 'react';
import { Particles as TsParticles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, ISourceOptions as ParticlesOptions } from 'tsparticles-engine';
import { BaseProps } from '../../types';

/**
 * The `Particles` component props
 */
interface Props extends BaseProps {
  readonly options: ParticlesOptions;
}

/**
 * Ussed to render particle animations using
 * `tsparticles` under the hood
 *
 * @param props The component props
 * @returns The `Particles` component
 */
const Particles: FunctionComponent<Props> = ({ className, options }): ReactElement<Props> => {

  /**
   * Used to initialise the particles engine and load the
   * plugins required for the particle animations
   */
  const init = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  return (
    <TsParticles
      className={className}
      id="particles"
      init={init}
      options={options}
    />
  );
};

export default Particles;
