import { QueryClient } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import './assets/styles/global.css';
import { App } from './App';
import type { ProvidersProps } from './utils/contexts/provider';
import { Provider } from './utils/contexts/provider';

const queryClient = new QueryClient();

const providerProps: Omit<ProvidersProps, 'children'> = {
  query: { client: queryClient }
};

// sessionRequest

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider {...providerProps}>
    <App />
  </Provider>
);
