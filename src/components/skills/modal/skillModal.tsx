import { FunctionComponent, ReactElement } from 'react';
import { ImageRoundness, ColourPalette, IconId } from '../../../enums';
import { BaseProps } from '../../../types';
import { Button, Modal, Text } from '../../common';
import { StyledImage, StyledName, StyledDescription } from './skillModal.styled';

/**
 * The `SkillModal` component props
 */
interface Props extends BaseProps {
  readonly open: boolean;
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
const SkillModal: FunctionComponent<Props> = ({ open, name, type, description, url, imageUrl, onClose, onClosed }): ReactElement<Props> => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      onClosed={onClosed}
    >
      {
        (imageUrl != null) && (
          <StyledImage
            path={imageUrl}
            alt={name}
            roundness={ImageRoundness.NONE}
          />
        )
      }
      <StyledName bold={true}>
        {name}
      </StyledName>
      <Text colour={ColourPalette.LIGHT_GREY}>
        {type}
      </Text>
      <StyledDescription colour={ColourPalette.LIGHT_GREY}>
        {description}
      </StyledDescription>
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
