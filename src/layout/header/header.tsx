import './header.scss';

import classNames from 'classnames';
import { useCallback, useRef, useState } from 'react';

import LogoIcon from '@/assets/icons/logo.svg?react';
import Burger from '@/components/burger';
import Nav from '@/components/nav';
import SocialLinks from '@/components/social-links';
import { data } from '@/data/data';
import { TOP_ID } from '@/data/section-id';
import { type DismissReason, useActiveSection, useDismiss } from '@/hooks';

const SECTION_IDS = data.links.map((link) => link.id);
const NAV_ID = 'primary-nav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const activeId = useActiveSection(SECTION_IDS);

  const handleDismiss = useCallback((reason: DismissReason) => {
    setIsOpen(false);

    if (reason === 'escape') {
      burgerRef.current?.focus();
    }
  }, []);

  useDismiss(headerRef, isOpen, handleDismiss);

  return (
    <header className={classNames('header', { header_open: isOpen })} ref={headerRef}>
      <Burger
        controls={NAV_ID}
        isOpen={isOpen}
        onToggle={() => setIsOpen((open) => !open)}
        ref={burgerRef}
      />
      <a aria-label={`${data.hero.name}, home`} className="header__logo-link" href={`#${TOP_ID}`}>
        <LogoIcon aria-hidden="true" className="header__logo" />
      </a>
      <Nav
        activeId={activeId}
        className="header__nav"
        id={NAV_ID}
        links={data.links}
        onLinkClick={() => setIsOpen(false)}
      />
      <SocialLinks className="header__social-links" label="Contacts" socials={data.socials} />
    </header>
  );
}

export default Header;
