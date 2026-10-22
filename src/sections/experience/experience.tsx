import './experience.scss';

import Section from '@/components/section';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { ExperienceProps } from './experience.props';

function Experience({ experience }: ExperienceProps) {
  return (
    <Section id={SectionId.EXPERIENCE}>
      <Title>{experience.title}</Title>
      <ul className="experience__list" role="list">
        {experience.items.map((item) => (
          <li className="experience__item" key={`${item.company}-${item.period}`}>
            <p className="experience__period">{item.period}</p>
            <div className="experience__body">
              <h3 className="experience__role">{item.role}</h3>
              <p className="experience__company">
                {item.company}
                {item.meta && ` · ${item.meta}`}
              </p>
              <p className="experience__description">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Experience;
