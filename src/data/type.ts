import type { SectionId } from './section-id';

export type SocialType = 'github' | 'telegram' | 'linkedin' | 'email';

export interface Social {
  href: string;
  label: string;
  type: SocialType;
}

export interface NavLink {
  id: SectionId;
  label: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  role: string;
}

export interface EducationItem {
  degree: string;
  period: string;
  school: string;
}

export interface AboutData {
  description: string[];
  education: EducationItem[];
  title: string;
}

export interface SkillsData {
  hard: string[];
  soft: string[];
  title: string;
}

export interface ContactData {
  subtitle: string;
  title: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  meta?: string;
}

export interface ExperienceData {
  items: ExperienceItem[];
  title: string;
}

export interface SiteData {
  about: AboutData;
  contacts: ContactData;
  experience: ExperienceData;
  hero: HeroData;
  links: NavLink[];
  skills: SkillsData;
  socials: Social[];
}
