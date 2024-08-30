import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

export const useReceiverPointStage = () => {
  const createOrderForm = useCreateOrderFormContext();
  const stage = useStage();

  const goToPaymentMethod = () => {
    stage.setStage('paymentMethod');
  };

  const goBack = () => {
    stage.setStage('sendPoint');
  };

  return {
    state: { createOrderForm },
    functions: { goToPaymentMethod, goBack }
  };
};
