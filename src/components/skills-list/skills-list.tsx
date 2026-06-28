import './skills-list.scss';

import type { SkillsListProps } from './skills-list.props';

function SkillsList({ items }: SkillsListProps) {
  return (
    <ul className="skills-list">
      {items.map((item, index) => (
        <li className="skills-list__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SkillsList;
