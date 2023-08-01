import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import "./design-system/index.scss";
import "./design-system/generic/App.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
