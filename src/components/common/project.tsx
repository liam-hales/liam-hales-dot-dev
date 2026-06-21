'use client';

import { FunctionComponent, ReactElement } from 'react';
import { BaseProps } from '../../types';
import { useQuery } from '../../hooks';
import { fetchRepo } from '../../helpers';
import { Loader } from '../';
import { FaGithub } from 'react-icons/fa';
import { Star } from 'lucide-react';
import Link from 'next/link';

/**
 * The `Project` component props
 */
interface Props extends BaseProps {
  readonly url: string;
}

/**
 * Used to render GitHub repository
 * details as a project card
 *
 * @param props The component props
 * @returns The `Project` component
 */
const Project: FunctionComponent<Props> = ({ className, url }): ReactElement<Props> => {
  const { isLoading, data } = useQuery(() => fetchRepo(url));

  return (
    <Link
      className={`${className ?? ''} flex flex-col items-start gap-y-2 border border-solid border-outline shadow-sm cursor-pointer rounded-xl px-6 py-4`}
      href={url}
      target="_blank"
      passHref={true}
    >
      {
        (isLoading === true) && (
          <Loader status="loading">
            Fetching GitHub repo
          </Loader>
        )
      }
      {
        (data != null) && (() => {
          const { name, description, owner, language, stargazersCount, topics = [] } = data;
          return (
            <>
              <div className="w-full min-w-64 flex flex-row items-center gap-x-2">
                <FaGithub
                  className="text-content-secondary"
                  size={14}
                />
                <p className="text-content-primary text-sm pt-0.5">
                  <span className="text-content-secondary">
                    {`${owner.login}/`}
                  </span>
                  <span className="font-bold ">
                    {name}
                  </span>
                </p>
              </div>
              <p className=" text-content-primary text-sm">
                {description}
              </p>
              <div className="flex flex-row items-center gap-x-4">
                <div className="flex flex-row items-center gap-x-2 ">
                  <div className="size-2 bg-typescript rounded-full" />
                  <p className="text-content-secondary text-xs pt-0.5">
                    {language}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-x-1.5 ">
                  <Star
                    className="text-content-secondary"
                    size={12}
                  />
                  <p className="text-content-secondary text-xs pt-0.5">
                    {stargazersCount}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center flex-wrap gap-1.5 pt-2">
                {
                  topics.map((topic) => {
                    return (
                      <code
                        className="text-accent text-[11px] bg-surface-mid border border-solid border-outline rounded-sm px-1 py-0.5"
                        key={`topic-${topic}`}
                      >
                        {topic}
                      </code>
                    );
                  })
                }
              </div>
            </>
          );
        })()
      }
    </Link>
  );
};

export default Project;
