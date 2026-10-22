import './social-links.scss';

import classNames from 'classnames';
import type { ComponentType, SVGProps } from 'react';

import GithubIcon from '@/assets/icons/github.svg?react';
import LinkedinIcon from '@/assets/icons/linkedin.svg?react';
import EmailIcon from '@/assets/icons/mail.svg?react';
import TelegramIcon from '@/assets/icons/telegram.svg?react';
import { SOCIAL_LABEL } from '@/data/data';
import type { SocialType } from '@/data/type';

import type { SocialLinksProps } from './social-links.props';

const SocialIcon: Record<SocialType, ComponentType<SVGProps<SVGSVGElement>>> = {
  email: EmailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: TelegramIcon,
};

function SocialLinks({ className, label, socials, variant = 'icons' }: SocialLinksProps) {
  const hasText = variant === 'buttons';

  return (
    <ul
      aria-label={label}
      className={classNames('social-links', `social-links_${variant}`, className)}
      role="list"
    >
      {socials.map((social) => {
        const Icon = SocialIcon[social.type];
        const isExternal = social.type !== 'email';

        return (
          <li key={social.type}>
            <a
              aria-label={hasText ? undefined : `${SOCIAL_LABEL[social.type]}: ${social.label}`}
              className="social-links__link"
              href={social.href}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              target={isExternal ? '_blank' : undefined}
            >
              <Icon aria-hidden="true" className="social-links__icon" />
              {hasText && SOCIAL_LABEL[social.type]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
