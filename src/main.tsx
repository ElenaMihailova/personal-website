import './index.css';
import './styles/tokens.scss';
import './styles/base.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
