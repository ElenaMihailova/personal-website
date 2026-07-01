import './social-links.scss';

import classNames from 'classnames';
import type { ComponentType, SVGProps } from 'react';

import GithubIcon from '@/assets/icons/github.svg?react';
import LinkedinIcon from '@/assets/icons/in.svg?react';
import EmailIcon from '@/assets/icons/mail.svg?react';
import TelegramIcon from '@/assets/icons/tm.svg?react';
import { SOCIAL_LABEL } from '@/data/data';
import type { SocialType } from '@/data/type';

import type { SocialLinksProps } from './social-links.props';

const SocialIcon: Record<SocialType, ComponentType<SVGProps<SVGSVGElement>>> = {
  email: EmailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: TelegramIcon,
};

function SocialLinks({ className, showLabel, socials }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className={classNames('social-links', className)}>
      <ul className="social-links__list">
        {socials.map((social) => {
          const IconComponent = SocialIcon[social.type];
          return (
            <li className="social-links__item" key={social.type}>
              <a
                aria-label={`${SOCIAL_LABEL[social.type]}: ${social.label}`}
                className="social-links__link"
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconComponent className="social-links__icon" focusable="false" />
                {showLabel && <span className="social-links__label">{social.label}</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SocialLinks;
