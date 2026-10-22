import './footer.scss';

import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';
import ActionLink from '@/components/action-link';
import { data } from '@/data/data';
import { TOP_ID } from '@/data/section-id';

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {YEAR} {data.hero.name}
      </p>
      <ActionLink
        action={{ href: `#${TOP_ID}`, label: 'Back to top' }}
        icon={ArrowUpIcon}
        variant="text"
      />
    </footer>
  );
}

export default Footer;
