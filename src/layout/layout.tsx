import './layout.scss';

import Footer from './footer';
import Header from './header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout" id="top">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
