import './hero.scss';

import DownloadIcon from '@/assets/icons/download.svg?react';
import heroIllustration from '@/assets/images/hero.svg';
import ActionLink from '@/components/action-link';
import Section from '@/components/section';
import { SectionId } from '@/data/section-id';

import type { HeroProps } from './hero.props';

function Hero({ hero, resume }: HeroProps) {
  return (
    <Section className="hero" id={SectionId.HERO} reveal={false}>
      <div className="hero__intro">
        <p className="hero__byline">
          <span className="hero__name">{hero.name}</span>
          <span className="hero__role">{hero.role}</span>
        </p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <ActionLink action={hero.primaryAction} variant="primary" />
          <ActionLink action={hero.secondaryAction} variant="secondary" />
          <ActionLink action={resume} download icon={DownloadIcon} variant="text" />
        </div>
        <p className="hero__status">
          <span className="hero__status-dot" aria-hidden="true" />
          {hero.status}
        </p>
      </div>
      <div className="hero__art">
        <img
          alt=""
          className="hero__illustration"
          decoding="async"
          height={328}
          src={heroIllustration}
          width={328}
        />
        <span aria-hidden="true" className="hero__bubble">
          {hero.bubble}
        </span>
      </div>
    </Section>
  );
}

export default Hero;
