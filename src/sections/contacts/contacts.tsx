import './contacts.scss';

import contactIllustration from '@/assets/images/contact.svg';
import Illustration from '@/components/illustration';
import Section from '@/components/section';
import SocialLinks from '@/components/social-links';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { ContactsProps } from './contacts.props';

function Contacts({ contacts, socials }: ContactsProps) {
  return (
    <Section className="contacts" id={SectionId.CONTACTS}>
      <Illustration alt="" className="contacts__illustration" src={contactIllustration} />
      <div className="contacts__content">
        <Title className="contacts__title">{contacts.title}</Title>
        <p className="contacts__description">{contacts.subtitle}</p>
        <SocialLinks className="contacts__list" showLabel socials={socials} />
      </div>
    </Section>
  );
}

export default Contacts;
