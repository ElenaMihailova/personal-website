import type { Social } from '@/data/type';

export interface SocialLinksProps {
  className?: string;
  label?: string;
  socials: Social[];
  variant?: 'buttons' | 'icons';
}
