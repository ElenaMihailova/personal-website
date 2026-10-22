import './skills.scss';

import Section from '@/components/section';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { SkillsProps } from './skills.props';

const TOOL_SEPARATOR = '\u00a0· ';

function Skills({ skills }: SkillsProps) {
  return (
    <Section id={SectionId.SKILLS}>
      <Title intro={skills.intro}>{skills.title}</Title>
      <ul className="skills__grid" role="list">
        {skills.groups.map((group) => (
          <li className="skills__group" key={group.title}>
            <h3 className="skills__group-title">{group.title}</h3>
            <p>{group.description}</p>
            <p className="skills__tools">{group.tools.join(TOOL_SEPARATOR)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
