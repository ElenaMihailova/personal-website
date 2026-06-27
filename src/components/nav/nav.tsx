import './nav.scss';

import classNames from 'classnames';

import type { NavProps } from './nav.props';

function Nav({ className, id, links }: NavProps) {
  return (
    <nav id={id} aria-label="Primary" className={classNames('nav', className)}>
      <ul className="nav__list">
        {links.map((link) => (
          <li className="nav__item" key={link.id}>
            <a className="nav__link" href={`#${link.id}`}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
