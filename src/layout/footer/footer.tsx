import BackToTopIcon from '@/assets/icons/back-to-top.svg';
import Icon from '@/components/icon';

function Footer() {
  return (
    <footer className="footer">
      <a className="footer__back-to-top" href="#start">
        <Icon alt="Back to Top" className="footer__icon" src={BackToTopIcon} />
      </a>
    </footer>
  );
}

export default Footer;
