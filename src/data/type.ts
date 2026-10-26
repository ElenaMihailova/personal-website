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

export interface CallToAction {
  href: string;
  label: string;
}

export interface HeroData {
  bubble: string;
  lead: string;
  name: string;
  primaryAction: CallToAction;
  role: string;
  secondaryAction: CallToAction;
  status: string;
  title: string;
}

export interface WorkItem {
  company: string;
  contributions: string[];
  period: string;
  result?: string;
  summary: string;
  tags: string[];
  title: string;
}

export interface WorkData {
  intro: string;
  items: WorkItem[];
  title: string;
}

export interface EducationItem {
  degree: string;
  period: string;
  school: string;
}

export interface LanguageItem {
  level: string;
  name: string;
}

export interface Principle {
  text: string;
  title: string;
}

export interface AboutData {
  description: string[];
  education: EducationItem[];
  educationTitle: string;
  languages: LanguageItem[];
  languagesTitle: string;
  principles: Principle[];
  principlesTitle: string;
  title: string;
}

export interface SkillGroup {
  description: string;
  title: string;
  tools: string[];
}

export interface SkillsData {
  groups: SkillGroup[];
  intro: string;
  title: string;
}

export interface ContactData {
  subtitle: string;
  title: string;
}

export interface ExperienceItem {
  company: string;
  description?: string;
  meta?: string;
  period: string;
  role: string;
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
  resume: CallToAction;
  skills: SkillsData;
  socials: Social[];
  work: WorkData;
}
