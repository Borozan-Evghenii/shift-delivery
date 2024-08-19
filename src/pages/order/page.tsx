import { StageContainer } from './components/StageContainer/StageContainer';
import { Provider } from './provider';

export const OrderPage = () => (
  <div className='container flex h-[100vh] items-center justify-center'>
    <Provider>
      <StageContainer />
    </Provider>
  </div>
);

// page Layout
