import { FunctionComponent, ReactElement } from 'react';
import { ImageRoundness, TextAppearance } from '../../../enums';
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
}

/**
 * Used to render a skill and display
 * it's infomation within a modal
 *
 * @param props The component props
 * @returns The `SkillModal` component
 */
const SkillModal: FunctionComponent<Props> = ({ open, name, type, description, url, imageUrl, onClose }): ReactElement<Props> => {
  return (
    <Modal
      open={open}
      onClose={onClose}
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
      <Text appearance={TextAppearance.SECONDARY}>
        {type}
      </Text>
      <StyledDescription appearance={TextAppearance.SECONDARY}>
        {description}
      </StyledDescription>
      <Button onClick={() => window.open(url, '_blank')}>
        Visit website
      </Button>
    </Modal>
  );
};

export default SkillModal;
