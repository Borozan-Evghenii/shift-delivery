import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

export const usePaymentMethodPage = () => {
  const stage = useStage();
  const createOrderForm = useCreateOrderFormContext();

  const goToCheckIn = () => {
    stage.setStage('CheckIn');
  };

  const goBack = () => {
    stage.setStage('receivPoint');
  };

  return {
    state: { createOrderForm },
    functions: { goToCheckIn, goBack }
  };
};
