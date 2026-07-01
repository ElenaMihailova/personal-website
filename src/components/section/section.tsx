import './section.scss';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import type { SectionProps } from './section.props';

function Section({ className, id, children }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={classNames('section', 'section_reveal', { section_visible: isVisible }, className)}
      id={id}
      ref={sectionRef}
    >
      {children}
    </section>
  );
}

export default Section;
