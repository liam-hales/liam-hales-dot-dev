/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ColourPalette } from '../../enums';
import { useScreen } from '../../hooks';
import { BaseProps, IconId } from '../../types';
import { Box, Card, Icon, Text } from '../common';

/**
 * The `SkillAreaCard` component props
 */
interface Props extends BaseProps {
  readonly title: string;
  readonly description: string;
  readonly iconId: IconId;
}

/**
  * Renders the skill area card for
  * the `SkillAreas` component
  *
  * @param props The component props
  * @returns The `SkillAreaCard` component
  */
const SkillAreaCard: FunctionComponent<Props> = ({ className, title, description, iconId }): ReactElement<Props> => {

  const { screenSize } = useScreen();
  return (
    <Card
      className={className}
      direction={
        (screenSize === 'small')
          ? 'row'
          : 'column'
      }
      justify="center"
      css={css`
        width: 100%;
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <Icon
        id={iconId}
        css={css`
          margin-right: ${(screenSize === 'small') ? 24 : 0}px;
          font-size: 48px;
        `}
      />
      <Box alignment={
        (screenSize === 'small')
          ? 'flex-start'
          : 'center'
      }
      >
        <Text
          isBold={true}
          css={css`
            padding-top: ${(screenSize === 'small') ? 0 : 16}px;
            padding-bottom: ${(screenSize === 'small') ? 4 : 16}px;
            font-size: 18px;
          `}
        >
          {title}
        </Text>
        <Text
          colour={ColourPalette.GREY_400}
          css={css`
            max-width: ${(screenSize === 'small') ? 210 : 180}px;
            text-align: ${(screenSize === 'small') ? 'left' : 'center'};
          `}
        >
          {description}
        </Text>
      </Box>
    </Card>
  );
};

export default SkillAreaCard;
