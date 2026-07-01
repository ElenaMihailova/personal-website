import type { ContactData, ResumeData, Social } from '@/data/type';

export interface ContactsProps {
  contacts: ContactData;
  resume: ResumeData;
  socials: Social[];
}
