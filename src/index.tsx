import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSwitcher from './components/AppSwitcher';
import './app/page.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppSwitcher />
  </React.StrictMode>
);