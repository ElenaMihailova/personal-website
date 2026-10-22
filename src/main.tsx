import '@/styles/tokens.scss';
import '@/styles/base.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app';
import { resetScrollOnReload } from '@/utils/initial-scroll';

resetScrollOnReload();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
