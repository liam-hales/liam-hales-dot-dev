/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@mui/material';
import { ImageRoundness, ColourPalette, IconId } from '../../enums';
import { BaseProps } from '../../types';
import { Button, Image, Modal, Text } from '../common';

/**
 * The `SkillModal` component props
 */
interface Props extends BaseProps {
  readonly isOpen: boolean;
  readonly name: string;
  readonly type: string;
  readonly description: string;
  readonly url: string;
  readonly imageUrl?: string;
  readonly onClose: () => void;
  readonly onClosed: () => void;
}

/**
 * Used to render a skill and display
 * it's infomation within a modal
 *
 * @param props The component props
 * @returns The `SkillModal` component
 */
const SkillModal: FunctionComponent<Props> = ({ isOpen, name, type, description, url, imageUrl, onClose, onClosed }): ReactElement<Props> => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onClosed={onClosed}
    >
      {
        (imageUrl != null) && (
          <Image
            path={imageUrl}
            alt={name}
            roundness={ImageRoundness.NONE}
            css={css`
              width: 68px;
              height: 68px;
            `}
          />
        )
      }
      <Text
        isBold={true}
        css={css`
          padding-top: 16px;
          font-size: 32px;
        `}
      >
        {name}
      </Text>
      <Text colour={ColourPalette.GREY_400}>
        {type}
      </Text>
      <Text
        colour={ColourPalette.GREY_400}
        css={css`
          padding-top: 26px;
          padding-bottom: 34px;
        `}
      >
        {description}
      </Text>
      <Button
        iconId={IconId.ARROW_RIGHT_SQUARE}
        onClick={() => window.open(url, '_blank')}
      >
        Visit website
      </Button>
    </Modal>
  );
};

export default SkillModal;
