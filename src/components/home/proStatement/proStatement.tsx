import { FunctionComponent, ReactElement } from 'react';
import { TextAppearance } from '../../../enums';
import { PageSlug } from '../../../graphql';
import { usePageContent } from '../../../hooks';
import { BaseProps } from '../../../types';
import { Box, Title, Text } from '../../common';
import { StyledStatement } from './proStatement.styled';

/**
 * The `ProStatement` component props
 */
type Props = BaseProps;

/**
 * Renders the professional statement section for the home page
 * which is rendered within the `HomeRoute` component
 *
 * @param props The component props
 * @returns The `ProStatement` component
 */
const ProStatement: FunctionComponent<Props> = ({ className }): ReactElement<Props> => {

  const { proStatementText } = usePageContent({
    slug: PageSlug.HOME,
  });

  return (
    <Box className={className}>
      <Title>
        Professional Statement
      </Title>
      <StyledStatement
        appearance={TextAppearance.SECONDARY}
        italic={true}
      >
        {proStatementText}
      </StyledStatement>
      <Text bold={true}>
        - Liam Hales
      </Text>
    </Box>
  );
};

export default ProStatement;
