import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById ('root');
const rootDOM = createRoot(root);
rootDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();