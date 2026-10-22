import './work.scss';

import Section from '@/components/section';
import Title from '@/components/title';
import WorkCard from '@/components/work-card';
import { SectionId } from '@/data/section-id';

import type { WorkProps } from './work.props';

function Work({ work }: WorkProps) {
  return (
    <Section id={SectionId.WORK}>
      <Title intro={work.intro}>{work.title}</Title>
      <ul className="work__list" role="list">
        {work.items.map((item) => (
          <li key={item.title}>
            <WorkCard item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Work;
