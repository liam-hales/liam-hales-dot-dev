/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useState } from 'react';
import { css } from '@mui/material';
import { motion, Transition } from 'framer-motion';
import { ColourPalette } from '../enums';
import { BaseProps, LogoSection } from '../types';
import { withRef } from '../helpers';

/**
 * THe `Logo` component props
 */
interface Props extends BaseProps<HTMLDivElement> {
  readonly isInteractive?: boolean;
  readonly activeSection?: LogoSection;
  readonly onChange?: (section?: LogoSection) => void;
}

/**
 * Used to render the logo SVG. When `interactive` is `true` each section of
 * the logo becomes interactive calling `onChange` when selected
 *
 * @param props The component props
 * @returns The `Logo` component
 */
const Logo: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    internalRef,
    className,
    isInteractive = false,
    activeSection,
    onChange,
  } = props;

  const [enableExit, setEnableExit] = useState<boolean>(true);

  const letterLPath = 'M372,877 L372,724 C372,711.833956 382.888629,701 395,701 L496,701 C508.111371,701 519,711.833956 519,724 L519,1003 C519,1015.16604 508.111371,1024 496,1024 L21,1024 C8.8886288,1024 0,1015.16604 0,1003 L0,921 C0,911.518233 6.0400656,903.30026 14.9948362,900.301862 L66,882 L66,388 L17.1723842,377.304006 C7.13877892,375.064251 0,366.324762 0,356 L0,274 C0,261.833956 8.8886288,253 21,253 L287,253 C299.111371,253 308,261.833956 308,274 L308,356 C308,366.500602 299.635666,375.341454 289.385251,377.400791 L234,388 L234,877 L372,877 Z';
  const reverseLetterLPath = 'M519,400 L519,553 C519,565.166044 508.111371,576 496,576 L395,576 C382.888629,576 372,565.166044 372,553 L372,274 C372,261.833956 382.888629,253 395,253 L870,253 C882.111371,253 891,261.833956 891,274 L891,356 C891,365.481767 884.959934,373.69974 876.005164,376.698138 L825,395 L825,889 L873.827616,899.695994 C883.861221,901.935749 891,910.675238 891,921 L891,1003 C891,1015.16604 882.111371,1024 870,1024 L604,1024 C591.888629,1024 583,1015.16604 583,1003 L583,921 C583,910.499398 591.364334,901.658546 601.614749,899.599209 L657,889 L657,400 L519,400 Z';
  const barPath = 'M254,21.5625 C254,9.65386008 263.892785,0 276.096154,0 L614.903846,0 C627.107215,0 637,9.65386008 637,21.5625 L637,93.4375 C637,105.34614 627.107215,115 614.903846,115 L276.096154,115 C263.892785,115 254,105.34614 254,93.4375 L254,21.5625 Z';

  /**
   * Used to handle the `onClick` event. Calls the
   * `onChange` function and disables the exit
   *
   * @param section The logo section
   */
  const onClick = (section: LogoSection): void => {
    onChange?.(section);
    setEnableExit(false);
  };

  /**
   * Used to handle the `onMouseEnter` event. Calls the
   * `onChange` function and enables the exit
   *
   * @param section The logo section
   */
  const onEnter = (section: LogoSection): void => {
    onChange?.(section);
    setEnableExit(true);
  };

  /**
   * Used to handle the `onMouseEnter` event. Calls the
   * `onChange` function only when the exit is enabled
   */
  const onExit = (): void => {
    if (enableExit === true) {
      onChange?.();
    }
  };

  /**
   * The animation transition options
   * for the `path` elements
   */
  const pathTransition: Transition = {
    duration: 0.2,
  };

  return (
    <div
      ref={internalRef}
      className={className}
    >
      <svg
        viewBox="0 0 891 1024"
        css={css`
          cursor: ${(isInteractive === true) ? 'pointer' : 'unset'};
          pointer-events: ${(isInteractive === false) ? 'none' : 'unset'};
          fill: ${ColourPalette.WHITE};
        `}
      >
        <motion.path
          d={letterLPath}
          onClick={() => onClick('letterL')}
          onMouseEnter={() => onEnter('letterL')}
          onMouseLeave={() => onExit()}
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: (activeSection === 'letterL' || activeSection == null) ? 1 : 0.1,
            scale: (activeSection === 'letterL' || activeSection == null) ? 1 : 0.96,
          }}
          transition={pathTransition}
        />
        <motion.path
          d={reverseLetterLPath}
          onClick={() => onClick('reverseLetterL')}
          onMouseEnter={() => onEnter('reverseLetterL')}
          onMouseLeave={() => onExit()}
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: (activeSection === 'reverseLetterL' || activeSection == null) ? 1 : 0.1,
            scale: (activeSection === 'reverseLetterL' || activeSection == null) ? 1 : 0.96,
          }}
          transition={pathTransition}
        />
        <motion.path
          d={barPath}
          onClick={() => onClick('bar')}
          onMouseEnter={() => onEnter('bar')}
          onMouseLeave={() => onExit()}
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: (activeSection === 'bar' || activeSection == null) ? 1 : 0.1,
            scale: (activeSection === 'bar' || activeSection == null) ? 1 : 0.96,
          }}
          transition={pathTransition}
        />
      </svg>
    </div>
  );
};

export default withRef(Logo);
