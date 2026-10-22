import type { CallToAction, ContactData, Social } from '@/data/type';

export interface ContactsProps {
  contacts: ContactData;
  resume: CallToAction;
  socials: Social[];
}
