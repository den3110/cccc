import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
