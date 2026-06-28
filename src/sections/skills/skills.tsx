import skillsllustration from '@/assets/images/skills.svg';
import Illustration from '@/components/illustration';
import Section from '@/components/section';
import SkillsList from '@/components/skills-list';
import Tabs from '@/components/tabs';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { SkillsProps } from './skills.props';

function Skills({ skills }: SkillsProps) {
  return (
    <Section className="skills" id={SectionId.SKILLS}>
      <Illustration alt="" className="skills__illustration" src={skillsllustration} />
      <Title className="skills__title">{skills.title}</Title>
      <Tabs
        items={[
          {
            id: 'hard',
            label: 'Hard Skills',
            content: <SkillsList items={skills.hard} />,
          },
          {
            id: 'soft',
            label: 'Soft Skills',
            content: <SkillsList items={skills.soft} />,
          },
        ]}
      />
    </Section>
  );
}

export default Skills;
