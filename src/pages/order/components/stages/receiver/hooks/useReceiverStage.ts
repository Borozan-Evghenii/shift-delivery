import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

export const useReceiverStage = () => {
  const stage = useStage();
  const createOrderForm = useCreateOrderFormContext();

  const goToSender = () => {
    stage.setStage('sender');
  };

  const goBack = () => {
    stage.setStage('deliveryMethod');
  };

  return {
    state: { createOrderForm },
    functions: { goToSender, goBack }
  };
};
