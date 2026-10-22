export const SectionId = {
  HERO: 'hero',
  WORK: 'work',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  ABOUT: 'about',
  CONTACTS: 'contacts',
} as const;

export const MAIN_CONTENT_ID = 'main';

export const TOP_ID = 'top';

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
