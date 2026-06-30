export const SectionId = {
  ABOUT: 'about',
  HERO: 'hero',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
