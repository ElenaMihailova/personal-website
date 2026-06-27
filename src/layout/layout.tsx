import Footer from './footer';
import Header from './header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
