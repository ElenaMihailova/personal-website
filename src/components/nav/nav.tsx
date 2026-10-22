import './nav.scss';

import classNames from 'classnames';

import type { NavProps } from './nav.props';

function Nav({ activeId, className, id, links, onLinkClick }: NavProps) {
  return (
    <nav aria-label="Primary" className={classNames('nav', className)} id={id}>
      <ul className="nav__list" role="list">
        {links.map((link) => (
          <li key={link.id}>
            <a
              aria-current={link.id === activeId ? 'location' : undefined}
              className="nav__link"
              href={`#${link.id}`}
              onClick={onLinkClick}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
