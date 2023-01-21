/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { Button as MuiButton, css } from '@mui/material';
import { BaseProps } from '../../../types';
import { ColourPalette, IconId } from '../../../enums';
import { Text, Icon } from '..';
import { withMotion } from '../../../helpers';

/**
 * The `Button` component props
 */
interface Props extends BaseProps<HTMLButtonElement> {
  readonly colour?: ColourPalette;
  readonly iconId?: IconId;
  readonly onClick?: () => void;
  readonly children: string;
}

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
    colour = ColourPalette.BLUE,
    iconId,
    onClick,
    children,
  } = props;

  return (
    <MuiButton
      ref={internalRef}
      className={className}
      variant="contained"
      color={colour}
      disableElevation={true}
      onClick={onClick}
      css={css`
        border-radius: 16.5px;
      `}
    >
      {
        (iconId != null) && (
          <Icon
            id={iconId}
            colour={ColourPalette.WHITE}
            css={css`
              padding-right: 8px;
              font-size: 16px;
            `}
          />
        )
      }
      <Text isBold={true}>
        {children}
      </Text>
    </MuiButton>
  );
};

export default withMotion(Button);
