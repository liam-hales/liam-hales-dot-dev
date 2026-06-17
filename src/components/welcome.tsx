'use client';

import { FunctionComponent, ReactElement, useMemo, useState } from 'react';
import { Logo } from './';
import { suggestions } from '../constants';
import { CircleSmall, ChevronLeft, ChevronRight } from 'lucide-react';
import { BaseProps } from '../types';
import { useMediaQuery } from 'usehooks-ts';

/**
 * The `Welcome` component props
 */
interface Props extends BaseProps {
  readonly onSuggestion: (value: string) => void;
}

/**
 * Used to render the welcome UI which is
 * rendered when there are no messages
 *
 * @param props The component props
 * @returns The `Welcome` component
 */
const Welcome: FunctionComponent<Props> = ({ className, onSuggestion }): ReactElement<Props> => {
  const [page, setPage] = useState<number>(0);

  const isLargeScreen = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  /**
   * Used to calculate the page items,
   * page count and page size
   */
  const [pageItems, pageCount, pageSize] = useMemo(() => {
    const pageSize = (isLargeScreen === true) ? 4 : suggestions.length;
    const pageCount = Math.ceil(suggestions.length / pageSize);

    // Calculate the start index and slice the
    // data array to get the page items
    const startIndex = page * pageSize;
    const pageItems = suggestions.slice(startIndex, startIndex + pageSize);

    return [
      pageItems,
      pageCount,
      pageSize,
    ];
  }, [page, isLargeScreen]);

  return (
    <div className={`${className ?? ''} flex flex-col items-center sm:justify-center gap-y-10`}>
      <Logo className="w-12 fill-accent shrink-0" />
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-content-primary text-[40px] text-center leading-10">
          <span className="font-light">Alright,</span>
          <span>{` I'm Liam`}</span>
          {
            (isLargeScreen === true)
              ? ' '
              : <br />
          }
          <span className="italic">
            {`— let's chat.`}
          </span>
        </p>
        <div className="flex flex-col items-center">
          <p className="text-content-secondary text-center">
            {`I'm a Senior Software Engineer from Manchester.`}
          </p>
          <p className="text-content-secondary text-center">
            Ask me anything or use one of the suggestions below.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-x-3">
        {
          (isLargeScreen === true) && (
            <button
              className="flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={page === 0}
              onClick={() => setPage((current) => Math.max(current - 1, 0))}
            >
              <ChevronLeft
                className="text-content-secondary"
                size={22}
              />
            </button>
          )
        }
        <div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-3">
          {
            pageItems.map((item, index) => {
              return (
                <button
                  className="flex flex-row items-center gap-x-2 border border-solid border-outline bg-surface-mid rounded-xl cursor-pointer px-4 py-3 hover:bg-hover"
                  key={`suggestion-${(page * pageSize) + index}`}
                  onClick={() => onSuggestion(item)}
                >
                  <CircleSmall
                    className="text-content-secondary"
                    size={12}
                  />
                  <span className="text-sm text-content-primary pt-0.5">
                    {item}
                  </span>
                </button>
              );
            })
          }
        </div>
        {
          (isLargeScreen === true) && (
            <button
              className="flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={page >= (pageCount - 1)}
              onClick={() => setPage((current) => Math.min(current + 1, pageCount - 1))}
            >
              <ChevronRight
                className="text-content-secondary"
                size={22}
              />
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Welcome;
