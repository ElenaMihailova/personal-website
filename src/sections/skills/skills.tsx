import './skills.scss';

import hardSkillsIllustration from '@/assets/images/hard-skills.svg';
import softSkillsIllustration from '@/assets/images/soft-skills.svg';
import Illustration from '@/components/illustration';
import Section from '@/components/section';
import SkillsList from '@/components/skills-list';
import Tabs from '@/components/tabs';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';
import { useActiveTab } from '@/hooks';

import type { SkillsProps } from './skills.props';

function Skills({ skills }: SkillsProps) {
  const tabs = [
    {
      id: 'hard',
      illustration: hardSkillsIllustration,
      label: 'Hard Skills',
      content: <SkillsList items={skills.hard} />,
    },
    {
      id: 'soft',
      illustration: softSkillsIllustration,
      label: 'Soft Skills',
      content: <SkillsList items={skills.soft} />,
    },
  ];

  const { activeTabId, activeTab, setActiveTabId } = useActiveTab(tabs, 'hard');

  return (
    <Section className="skills" id={SectionId.SKILLS}>
      <Illustration
        alt=""
        className="skills__illustration motion-slide-in"
        key={activeTabId}
        src={activeTab.illustration}
      />
      <div className="skills__content">
        <Title className="skills__title">{skills.title}</Title>
        <Tabs activeId={activeTabId} items={tabs} onChange={setActiveTabId} />
      </div>
    </Section>
  );
}

export default Skills;
