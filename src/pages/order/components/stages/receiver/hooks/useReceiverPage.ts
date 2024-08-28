import { useStage } from '@/pages/order/context/stage';
import { useCreateOrderFormContext } from '@/pages/order/context/stage/form/useCreateOrderFormContext';

export const useReceiverPage = () => {
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
