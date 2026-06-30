import './experience.scss';

import experienceIllustration from '@/assets/images/work.svg';
import Illustration from '@/components/illustration';
import Section from '@/components/section';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { ExperienceProps } from './experience.props';

function Experience({ experience }: ExperienceProps) {
  return (
    <Section className="experience" id={SectionId.EXPERIENCE}>
      <Illustration alt="" className="experience__illustration" src={experienceIllustration} />
      <div className="experience__content">
        <Title className="">{experience.title}</Title>
        <ul className="experience__list">
          {experience.items.map((item) => (
            <li className="experience__item" key={`${item.company}-${item.period}`}>
              <h3 className="experience__role">{item.role}</h3>
              <p className="experience__company">{item.company}</p>
              <p className="experience__period">{item.period}</p>
              <p className="experience__description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Experience;
