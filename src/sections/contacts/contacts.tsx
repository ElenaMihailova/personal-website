import './contacts.scss';

import DownloadIcon from '@/assets/icons/download.svg?react';
import contactIllustration from '@/assets/images/contact.svg';
import ActionLink from '@/components/action-link';
import Section from '@/components/section';
import SocialLinks from '@/components/social-links';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { ContactsProps } from './contacts.props';

function Contacts({ contacts, resume, socials }: ContactsProps) {
  return (
    <Section className="contacts" id={SectionId.CONTACTS}>
      <img
        alt=""
        className="contacts__illustration"
        decoding="async"
        height={270}
        loading="lazy"
        src={contactIllustration}
        width={328}
      />
      <div className="contacts__content">
        <Title intro={contacts.subtitle}>{contacts.title}</Title>
        <SocialLinks socials={socials} variant="buttons" />
        <ActionLink action={resume} download icon={DownloadIcon} variant="primary" />
      </div>
    </Section>
  );
}

export default Contacts;
