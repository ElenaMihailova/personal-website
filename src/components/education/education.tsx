import './education.scss';

import type { EducationProps } from './education.props';

function Education({ items }: EducationProps) {
  return (
    <ul className="education">
      {items.map((item) => (
        <li key={item.school} className="education__item">
          <h3 className="education__degree">{item.degree}</h3>
          <p className="education__school">{item.school}</p>
          <p className="education__period">{item.period}</p>
        </li>
      ))}
    </ul>
  );
}

export default Education;
