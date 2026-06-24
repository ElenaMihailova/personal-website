import githubIcon from '@/assets/icons/github.svg';
import linkedinIcon from '@/assets/icons/in.svg';
import emailIcon from '@/assets/icons/mail.svg';
import TelegramIcon from '@/assets/icons/tm.svg';
import type { SocialType } from '@/data/type';

import Icon from '../icon';
import type { SocialLinksProps } from './social-links-props';

const SocialIcon: Record<SocialType, string> = {
  email: emailIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  telegram: TelegramIcon,
};

function SocialLinks({ showLabel, socials }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className="social-links">
      <ul>
        {socials.map((social) => (
          <li key={social.type}>
            <a href={social.href} rel="noopener noreferrer" target="_blank">
              <Icon alt={social.label} src={SocialIcon[social.type]} />
              {showLabel && <p>{social.label}</p>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialLinks;
