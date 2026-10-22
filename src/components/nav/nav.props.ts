import type { SectionId } from '@/data/section-id';
import type { NavLink } from '@/data/type';

export interface NavProps {
  activeId: SectionId | null;
  className?: string;
  id?: string;
  links: NavLink[];
  onLinkClick: () => void;
}
