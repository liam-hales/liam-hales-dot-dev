import { FunctionComponent, ReactElement } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BaseProps } from '../types';
import { IconType } from 'react-icons';
import Link from 'next/link';

/**
 * The `SocialLink` component props
 */
interface Props extends BaseProps {
  readonly platform: 'github' | 'linkedin';
}

/**
 * Used to render a social link button
 * for a specific social platform
 *
 * @param props The component props
 * @returns The `SocialLink` component
 */
const SocialLink: FunctionComponent<Props> = ({ className, platform }): ReactElement<Props> => {
  // The map between the platform and
  // the link icon component to render
  const iconMap: Record<typeof platform, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
  };

  // The map between the platform
  // and the link text to render
  const textMap: Record<typeof platform, string> = {
    github: 'GitHub',
    linkedin: 'LinkedIn',
  };

  // The mao between the platform
  // and the URL used for the link
  const urlMap: Record<typeof platform, string> = {
    github: 'https://github.com/liam-hales',
    linkedin: 'https://linkedin.com/in/liam-hales',
  };

  const Icon = iconMap[platform];
  return (
    <Link
      className={`${className ?? ''} flex flex-row items-center text-ink text-[15px] cursor-pointer gap-x-2 rounded-lg px-3 py-1 hover:bg-elevated`}
      href={urlMap[platform]}
      target="_blank"
      passHref={true}
    >
      <Icon size={16} />
      <span className="pt-1">
        {textMap[platform]}
      </span>
    </Link>
  );
};

export default SocialLink;
