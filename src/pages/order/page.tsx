import { StageContainer } from './components/StageContainer/StageContainer';
import { useOrderPage } from './hooks/useOrderPage';
import { Provider } from './provider';

export const OrderPage = () => {
  const { state } = useOrderPage();

  return (
    <div className='container flex h-[100vh] items-center justify-center'>
      <Provider methods={state.form.createOrderForm}>
        <StageContainer />
      </Provider>
    </div>
  );
};
