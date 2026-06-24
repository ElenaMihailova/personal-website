import LogoIcon from '@/assets/icons/logo.svg';
import Icon from '@/components/icon';
import Nav from '@/components/nav/nav';
import SocialLinks from '@/components/social-links';
import { data } from '@/data/data';

function Header() {
  return (
    <header className="header">
      <button
        aria-controls="primary-nav"
        aria-expanded={false}
        className="header__menu-button"
        type="button"
      >
        Menu
      </button>
      <Icon alt="Logo" className="header__logo" src={LogoIcon} />
      <Nav links={data.links} />
      <SocialLinks socials={data.socials} />
    </header>
  );
}

export default Header;
