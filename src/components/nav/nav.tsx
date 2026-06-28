import './nav.scss';

import classNames from 'classnames';

import type { NavProps } from './nav.props';

function Nav({ activeId, className, id, links, onLinkClick }: NavProps) {
  return (
    <nav id={id} aria-label="Primary" className={classNames('nav', className)}>
      <ul className="nav__list">
        {links.map((link) => (
          <li className="nav__item" key={link.id}>
            <a
              aria-current={link.id === activeId || undefined}
              className={classNames('nav__link', { nav__link_active: link.id === activeId })}
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
