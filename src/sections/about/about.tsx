import './about.scss';

import aboutIllustration from '@/assets/images/about.svg';
import educationIllustration from '@/assets/images/education.svg';
import Education from '@/components/education';
import Illustration from '@/components/illustration';
import Section from '@/components/section';
import Tabs from '@/components/tabs';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';
import { useActiveTab } from '@/hooks';

import type { AboutProps } from './about.props';

function About({ about }: AboutProps) {
  const tabs = [
    {
      id: 'personal',
      label: 'Personal',
      illustration: aboutIllustration,
      content: (
        <div>
          {about.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      id: 'education',
      illustration: educationIllustration,
      label: 'Education',
      content: <Education items={about.education} />,
    },
  ];

  const { activeTabId, activeTab, setActiveTabId } = useActiveTab(tabs, 'personal');

  return (
    <Section className="about" id={SectionId.ABOUT}>
      <Illustration
        alt=""
        className="about__illustration motion-slide-in"
        key={activeTabId}
        src={activeTab.illustration}
      />
      <div className="about__content">
        <Title className="about__title">{about.title}</Title>
        <Tabs activeId={activeTabId} items={tabs} onChange={setActiveTabId} />
      </div>
    </Section>
  );
}

export default About;
