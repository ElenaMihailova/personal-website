import './about.scss';

import aboutIllustration from '@/assets/images/about.svg';
import Education from '@/components/education';
import Illustration from '@/components/illustration';
import Section from '@/components/section';
import Tabs from '@/components/tabs';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { AboutProps } from './about.props';

function About({ about }: AboutProps) {
  return (
    <Section className="about" id={SectionId.ABOUT}>
      <Illustration alt="" className="about__illustration" src={aboutIllustration} />
      <div className="about__content">
        <Title className="about__title">{about.title}</Title>
        <Tabs
          items={[
            {
              id: 'personal',
              label: 'Personal',
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
              label: 'Education',
              content: <Education items={about.education} />,
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default About;
