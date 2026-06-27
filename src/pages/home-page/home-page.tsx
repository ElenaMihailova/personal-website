import './home-page.scss';

import contactIllustration from '@/assets/images/contact.svg';
import skillsllustration from '@/assets/images/skills.svg';
import Illustration from '@/components/illustration/illustration';
import Section from '@/components/section';
import SocialLinks from '@/components/social-links';
import Title from '@/components/title';
import { data } from '@/data/data';
import About from '@/sections/about/about';
import Hero from '@/sections/hero/hero';

function HomePage() {
  return (
    <main className="home-page">
      <Hero hero={data.hero} />
      <About about={data.about} />

      <Section className="skills" id={'skills'}>
        <Illustration alt="" className="skills__illustration" src={skillsllustration} />
        <Title className="skills__title">{data.skills.title}</Title>
        <button>Hard Skills</button>
        <ul>
          {data.skills.hard.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <button>Soft Skills</button>
        <ul>
          {data.skills.soft.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Section>
      <Section className="contact" id={'contact'}>
        <Title className="contact__title">{data.contacts.title}</Title>
        <p>{data.contacts.subtitle}</p>
        <SocialLinks showLabel socials={data.socials} />
        <Illustration alt="" className="contact__illustration" src={contactIllustration} />
      </Section>
    </main>
  );
}

export default HomePage;
