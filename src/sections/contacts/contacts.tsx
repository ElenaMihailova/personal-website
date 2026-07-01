import './contacts.scss';

import contactIllustration from '@/assets/images/contact.svg';
import Illustration from '@/components/illustration';
import ResumeLink from '@/components/resume-link';
import Section from '@/components/section';
import SocialLinks from '@/components/social-links';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { ContactsProps } from './contacts.props';

function Contacts({ contacts, resume, socials }: ContactsProps) {
  return (
    <Section className="contacts" id={SectionId.CONTACTS}>
      <Illustration
        alt=""
        className="contacts__illustration motion-gentle-flow"
        src={contactIllustration}
      />
      <div className="contacts__content">
        <Title className="contacts__title">{contacts.title}</Title>
        <p className="contacts__description">{contacts.subtitle}</p>
        <div className="contacts__links">
          <SocialLinks className="contacts__list" showLabel socials={socials} />
          <ResumeLink label={contacts.resumeLabel} resume={resume} variant="contact" />
        </div>
      </div>
    </Section>
  );
}

export default Contacts;
