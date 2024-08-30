import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

export const useSendPointStage = () => {
  const stage = useStage();
  const createOrderForm = useCreateOrderFormContext();

  const goToReceivPoint = () => {
    stage.setStage('receivPoint');
  };

  const goBack = () => {
    stage.setStage('sender');
  };
  return { state: { createOrderForm }, functions: { goBack, goToReceivPoint } };
};
