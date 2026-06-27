import './section.scss';

import classNames from 'classnames';

import type { SectionProps } from './section.props';

function Section({ className, id, children }: SectionProps) {
  return (
    <section className={classNames('section', className)} id={id}>
      {children}
    </section>
  );
}

export default Section;
