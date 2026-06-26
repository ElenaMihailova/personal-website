import aboutIllustration from '@/assets/images/about.svg';
import contactIllustration from '@/assets/images/contact.svg';
import heroIllustration from '@/assets/images/hero.svg';
import skillsllustration from '@/assets/images/skills.svg';
import Illustration from '@/components/illustration/illustration';
import Section from '@/components/section';
import SocialLinks from '@/components/social-links';
import Title from '@/components/title';
import { data } from '@/data/data';

function HomePage() {
  return (
    <>
      <Section className="hero" id="home">
        <Illustration alt="" className="hero__illustration" src={heroIllustration} />
        <h1 className="hero__greeting">
          {data.hero.greeting} <span>{data.hero.name}</span>
        </h1>
        <p>{data.hero.role}</p>
      </Section>
      <Section className="about" id={'about'}>
        <Illustration alt="" className="about__illustration" src={aboutIllustration} />
        <Title className="about__title">{data.about.title}</Title>
        <button>Personal</button>
        <p>{data.about.description}</p>
        <button>Education</button>
        <div>
          {data.about.education.map((item, index) => (
            <div key={index}>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </div>
          ))}
        </div>
      </Section>
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
    </>
  );
}

export default HomePage;
