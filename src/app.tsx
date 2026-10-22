import { useEffect } from 'react';

import Layout from '@/layout';
import HomePage from '@/pages/home-page';
import { scrollToInitialHash } from '@/utils/initial-scroll';

function App() {
  useEffect(() => {
    scrollToInitialHash();
  }, []);

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
