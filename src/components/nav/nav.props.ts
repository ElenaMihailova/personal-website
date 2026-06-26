import type { NavLink } from '@/data/type';

export interface NavProps {
  className?: string;
  id?: string;
  links: NavLink[];
}
