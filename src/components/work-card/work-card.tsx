import './work-card.scss';

import type { WorkCardProps } from './work-card.props';

function WorkCard({ item }: WorkCardProps) {
  return (
    <article className="work-card">
      <p className="work-card__meta">
        <span>{item.company}</span>
        <span>{item.period}</span>
      </p>
      <h3 className="work-card__title">{item.title}</h3>
      {item.result && <p className="work-card__result">{item.result}</p>}
      <p className="work-card__summary">{item.summary}</p>
      <ul className="work-card__contributions">
        {item.contributions.map((contribution) => (
          <li key={contribution}>{contribution}</li>
        ))}
      </ul>
      <ul className="work-card__tags" aria-label="Stack" role="list">
        {item.tags.map((tag) => (
          <li className="work-card__tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default WorkCard;
