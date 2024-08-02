import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/global.css';
import { App } from './App.tsx';
import { Provider } from './utils/contexts/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
