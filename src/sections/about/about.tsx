import './about.scss';

import Education from '@/components/education';
import Section from '@/components/section';
import Title from '@/components/title';
import { SectionId } from '@/data/section-id';

import type { AboutProps } from './about.props';

function About({ about }: AboutProps) {
  return (
    <Section id={SectionId.ABOUT}>
      <Title>{about.title}</Title>
      <div className="about__story">
        {about.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="about__columns">
        <div className="about__column about__column_wide">
          <h3 className="about__subtitle">{about.principlesTitle}</h3>
          <ul className="about__principles">
            {about.principles.map((principle) => (
              <li key={principle.title}>
                <strong className="about__principle-title">{principle.title}</strong>{' '}
                {principle.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="about__column">
          <h3 className="about__subtitle">{about.educationTitle}</h3>
          <Education items={about.education} />
        </div>
        <div className="about__column">
          <h3 className="about__subtitle">{about.languagesTitle}</h3>
          <dl className="about__languages">
            {about.languages.map((language) => (
              <div className="about__language" key={language.name}>
                <dt>{language.name}</dt>
                <dd className="about__language-level">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export default About;
