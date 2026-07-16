import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext';

// Service worker removed: the old cache-first worker served stale bundles after
// deploys, causing blank screens. Unregister any previously installed workers.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then(regs => regs.forEach(reg => reg.unregister()))
    .catch(() => {});
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
