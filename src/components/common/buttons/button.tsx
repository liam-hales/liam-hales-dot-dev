/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Button as MuiButton, css } from '@mui/material';
import { BaseProps, ButtonSize, IconId } from '../../../types';
import { ColourPalette } from '../../../enums';
import { Text, Icon } from '..';
import { withMotion } from '../../../helpers';

/**
 * The `Button` component props
 */
interface Props extends BaseProps<HTMLButtonElement> {
  readonly size?: ButtonSize;
  readonly colour?: ColourPalette;
  readonly iconId?: IconId;
  readonly onClick?: () => void;
  readonly children: string;
}

/**
 * The map between the `ButtonSize` and
 * the text size number in `px`
 */
const textSizeMap: Record<ButtonSize, number> = {
  small: 11,
  medium: 14,
  large: 16,
};

/**
 * The map between the `ButtonSize` and
 * the icon size number in `px`
 */
const iconSizeMap: Record<ButtonSize, number> = {
  small: 14,
  medium: 16,
  large: 20,
};

/**
 * The common `Button` component used to
 * render a button to perform an action
 *
 * @param props The component props
 * @returns The `Button` component
 */
const Button: FunctionComponent<Props> = (props): ReactElement<Props> => {
  const {
    internalRef,
    className,
    size = 'medium',
    colour = ColourPalette.BLUE,
    iconId,
    onClick,
    children,
  } = props;

  return (
    <MuiButton
      ref={internalRef}
      className={className}
      size={size}
      variant="contained"
      color={colour}
      disableElevation={true}
      onClick={onClick}
      css={css`
        border-radius: 6px;
      `}
    >
      {
        (iconId != null) && (
          <Icon
            id={iconId}
            colour={ColourPalette.WHITE}
            css={css`
              margin-right: 6px;
              font-size: ${iconSizeMap[size]}px;
            `}
          />
        )
      }
      <Text
        isBold={true}
        css={css`
          font-size: ${textSizeMap[size]}px;
        `}
      >
        {children}
      </Text>
    </MuiButton>
  );
};

export default withMotion(Button);
