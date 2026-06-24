import type { NavProps } from './nav.props';

function Nav({ links }: NavProps) {
  return (
    <nav aria-label="Primary" className="header__nav nav">
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
