import type { SectionProps } from './section.props';

function Section({ className, id, children }: SectionProps) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}

export default Section;
