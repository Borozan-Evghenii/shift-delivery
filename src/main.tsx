import ReactDOM from 'react-dom/client';

import './assets/styles/global.css';
import { App } from './App';
import { Provider } from './utils/contexts/provider';
import type { UserContextProps } from './utils/contexts/user';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider user={{} as UserContextProps}>
    <App />
  </Provider>
);
