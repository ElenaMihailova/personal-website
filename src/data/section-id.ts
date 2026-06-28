export const SectionId = {
  HERO: 'hero',
  ABOUT: 'about',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
