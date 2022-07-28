import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import reportWebVitals from './utils/reportWebVitals';

import App from './app/app';
import * as sw from './utils/pwa/service-worker';
import appTheme from './utils/ui/app-theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
sw.unregister();

// Se você deseja começar a medir a performance de seu app, passe uma função
// para registrar os resultados (por example: reportWebVitals(console.log))
// ou envie-os para um endpoint de dados analíticos (como o Google Analytics)
// Saiba mais em: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
