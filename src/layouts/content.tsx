import clsx from 'clsx';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SocialLink,
  TwitterIcon
} from '@/components/icons';
import { Meta } from '@/components/meta';
import { socialLink } from '@/constant/social-link';

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  withSocialLink?: boolean;
  topSpacer?: string;
}

const Content: React.FC<Props> = ({
  title,
  description,
  children,
  withSocialLink,
  topSpacer = 'mt-16 sm:mt-20'
}) => {
  return (
    <div className="sm:mt-26 pt-12 pb-5">
      <Meta title={title} description={description} />
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <Balancer>{title}</Balancer>
        </h1>
        <p className="mt-6 font-serif text-base text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        {withSocialLink && (
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={socialLink.twitter.link}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={socialLink.instagram.link}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={socialLink.github.link}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={socialLink.linkedin.link}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        )}
      </header>
      <div className={clsx(topSpacer)}>{children}</div>
    </div>
  );
};

export default Content;
