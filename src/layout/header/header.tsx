import './header.scss';

import classNames from 'classnames';
import { useState } from 'react';

import LogoIcon from '@/assets/icons/logo.svg';
import Burger from '@/components/burger';
import Icon from '@/components/icon';
import Nav from '@/components/nav/nav';
import SocialLinks from '@/components/social-links';
import { data } from '@/data/data';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={classNames('header', { header_open: isOpen })}>
      <div className="header__bar">
        <Burger controls="primary-nav" isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        <Icon alt="Logo" className="header__logo" src={LogoIcon} />
        <SocialLinks className="header__social-links" socials={data.socials} />
      </div>
      <Nav className="header__nav" id="primary-nav" links={data.links} />
    </header>
  );
}

export default Header;
