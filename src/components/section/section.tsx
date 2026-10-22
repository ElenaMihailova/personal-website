import './section.scss';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import type { SectionProps } from './section.props';

const REVEAL_ROOT_MARGIN = '0px 0px -10% 0px';

function Section({ children, className, id, reveal = true }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !reveal) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: REVEAL_ROOT_MARGIN },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [reveal]);

  return (
    <section
      className={classNames(
        'section',
        { section_reveal: reveal, section_visible: isVisible },
        className,
      )}
      id={id}
      ref={sectionRef}
    >
      {children}
    </section>
  );
}

export default Section;
