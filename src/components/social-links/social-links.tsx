import './social-links.scss';

import classNames from 'classnames';
import type { ComponentType, SVGProps } from 'react';

import githubIcon from '@/assets/icons/github.svg?react';
import linkedinIcon from '@/assets/icons/in.svg?react';
import emailIcon from '@/assets/icons/mail.svg?react';
import TelegramIcon from '@/assets/icons/tm.svg?react';
import type { SocialType } from '@/data/type';

import type { SocialLinksProps } from './social-links-props';

const SocialIcon: Record<SocialType, ComponentType<SVGProps<SVGSVGElement>>> = {
  email: emailIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  telegram: TelegramIcon,
};

function SocialLinks({ className, showLabel, socials }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className={classNames('social-links', className)}>
      <ul className="social-links__list">
        {socials.map((social) => {
          const IconComponent = SocialIcon[social.type];
          return (
            <li key={social.type}>
              <a href={social.href} rel="noopener noreferrer" target="_blank">
                <IconComponent className="social-links__icon" />
                {showLabel && <p>{social.label}</p>}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SocialLinks;
