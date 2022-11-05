import { FunctionComponent, ReactElement } from 'react';
import { BoxAlignment, ColourPalette } from '../../enums';
import { PageSlug } from '../../graphql';
import { usePageContent } from '../../hooks';
import { BaseProps } from '../../types';
import { Box, Title } from '../common';
import { StyledStatement, StyledName } from './proStatement.styled';

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
    <Box
      className={className}
      alignment={BoxAlignment.START}
    >
      <Title>
        Professional Statement
      </Title>
      <StyledStatement colour={ColourPalette.LIGHT_GREY}>
        {proStatementText}
      </StyledStatement>
      <StyledName
        bold={true}
        italic={true}
      >
        - Liam Hales
      </StyledName>
    </Box>
  );
};

export default ProStatement;
