/** @jsxImportSource @emotion/react */

import { FunctionComponent, ReactElement, useRef } from 'react';
import { css } from '@mui/material';
import { StatusHandler, Header, Content, CurrentPosition, SkillsPreview, LifeTimelinePreview } from '..';
import { Box, Button, Text } from '../common';
import { PageSlug } from '../../graphql';
import { usePageQuery, useScreen } from '../../hooks';
import { BoxDirection, QueryStatus, ColourPalette } from '../../enums';

/**
 * Used as the entry point for the curriculum vitae page.
 * Fetches the page data and renders it's components
 *
 * @returns The `CurriculumVitaeRoute` component
 */
const CurriculumVitaeRoute: FunctionComponent = (): ReactElement => {

  const currentPositionRef = useRef<HTMLDivElement>(null);
  const skillsPreviewRef = useRef<HTMLDivElement>(null);
  const lifeTimelinePreviewRef = useRef<HTMLDivElement>(null);

  const { scrollTo } = useScreen();
  const { status, data } = usePageQuery({
    slug: PageSlug.CV,
  });

  return (
    <StatusHandler status={status}>
      <Header title="Curriculum Vitae">
        <Box
          direction={BoxDirection.ROW}
          css={css`
            column-gap: 12px;
          `}
        >
          <Button onClick={() => scrollTo(currentPositionRef)}>
            Current Position
          </Button>
          <Button onClick={() => scrollTo(skillsPreviewRef)}>
            Skills
          </Button>
          <Button onClick={() => scrollTo(lifeTimelinePreviewRef)}>
            Life Timeline
          </Button>
        </Box>
      </Header>
      <Content>
        <CurrentPosition
          reference={currentPositionRef}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 50px;
          `}
        />
        <SkillsPreview
          reference={skillsPreviewRef}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 70px;
          `}
        />
        <LifeTimelinePreview
          reference={lifeTimelinePreviewRef}
          css={css`
            // Margin is applied here and not padding so
            // the auto scroll works correctly
            margin-top: 80px;
          `}
        />
        {
          (() => {
            if (status !== QueryStatus.SUCCESS) {
              return null;
            }

            const { content } = data;
            const { disclaimerText } = content;

            return (
              <Text
                colour={ColourPalette.GREY_600}
                css={css`
                  max-width: 500px;
                  padding-top: 65px;
                  font-size: 12px;
                  text-align: center;
                `}
              >
                {disclaimerText}
              </Text>
            );
          })()
        }
      </Content>
    </StatusHandler>
  );
};

export default CurriculumVitaeRoute;
