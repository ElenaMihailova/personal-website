import './header.scss';

import classNames from 'classnames';
import { useCallback, useRef, useState } from 'react';

import LogoIcon from '@/assets/icons/logo.svg';
import Burger from '@/components/burger';
import Icon from '@/components/icon';
import Nav from '@/components/nav/nav';
import SocialLinks from '@/components/social-links';
import { data } from '@/data/data';
import { useActiveSection, useDismiss } from '@/hooks';

const SECTION_IDS = data.links.map((link) => link.id);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const activeId = useActiveSection(SECTION_IDS);

  useDismiss(headerRef, isOpen, handleClose);

  return (
    <header className={classNames('header', { header_open: isOpen })} ref={headerRef}>
      <div className="header__bar">
        <Burger controls="primary-nav" isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        <Icon alt="Logo" className="header__logo" src={LogoIcon} />
        <SocialLinks className="header__social-links" socials={data.socials} />
      </div>
      <Nav
        activeId={activeId}
        className="header__nav"
        id="primary-nav"
        links={data.links}
        onLinkClick={() => setIsOpen(false)}
      />
    </header>
  );
}

export default Header;
