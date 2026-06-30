import './footer.scss';

import BackToTopIcon from '@/assets/icons/back-to-top.svg';
import Icon from '@/components/icon';

function Footer() {
  return (
    <footer className="footer">
      <a className="footer__back-to-top" href="#top">
        <Icon alt="Back to Top" className="footer__icon" src={BackToTopIcon} />
        <p className="footer__text">Back to top</p>
      </a>
    </footer>
  );
}

export default Footer;
