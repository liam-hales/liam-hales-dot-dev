/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/react';
import { ColourPalette } from '../../enums';
import { BaseProps, LogoIconId, ModalStatus } from '../../types';
import { Button, Link, LogoIcon, Modal, Text } from '../common';

/**
 * The `SkillModal` component props
 */
interface Props extends BaseProps {
  readonly isOpen: boolean;
  readonly name: string;
  readonly type: string;
  readonly description: string;
  readonly url: string;
  readonly iconId?: LogoIconId;
  readonly onClose: () => void;
  readonly onStatusChange?: (status: ModalStatus) => void;
}

/**
 * Used to render a skill and display
 * it's infomation within a modal
 *
 * @param props The component props
 * @returns The `SkillModal` component
 */
const SkillModal: FunctionComponent<Props> = ({ isOpen, name, type, description, url, iconId, onClose, onStatusChange }): ReactElement<Props> => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onStatusChange={onStatusChange}
    >
      {
        (iconId != null) && (
          <LogoIcon
            id={iconId}
            css={css`
              font-size: 62px;
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
      <Link
        href={url}
        target="_blank"
        passHref={true}
      >
        <Button iconId="externalLink">
          Visit website
        </Button>
      </Link>
    </Modal>
  );
};

export default SkillModal;
