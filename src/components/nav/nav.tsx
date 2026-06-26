import classNames from 'classnames';

import type { NavProps } from './nav.props';

function Nav({ className, id, links }: NavProps) {
  return (
    <nav id={id} aria-label="Primary" className={classNames('nav', className)}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
