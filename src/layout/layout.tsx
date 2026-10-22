import './layout.scss';

import { MAIN_CONTENT_ID, TOP_ID } from '@/data/section-id';

import Footer from './footer';
import Header from './header';
import type { LayoutProps } from './layout.props';

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout" id={TOP_ID}>
      <a className="layout__skip-link" href={`#${MAIN_CONTENT_ID}`}>
        Skip to content
      </a>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
