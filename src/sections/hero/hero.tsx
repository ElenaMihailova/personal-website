import './hero.scss';

import heroIllustration from '@/assets/images/hero.svg';
import Illustration from '@/components/illustration';
import Section from '@/components/section';

import type { HeroProps } from './hero.props';

function Hero({ hero }: HeroProps) {
  return (
    <Section className="hero" id="home">
      <Illustration alt="" className="hero__illustration" src={heroIllustration} />
      <div className="hero__text">
        <h1 className="hero__greeting">
          {hero.greeting} <span className="hero__name">{hero.name}</span>
        </h1>
        <p className="hero__role">{hero.role}</p>
      </div>
    </Section>
  );
}

export default Hero;
