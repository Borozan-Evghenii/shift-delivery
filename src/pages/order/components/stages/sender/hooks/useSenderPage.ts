import { useFormContext } from 'react-hook-form';

import { useStage } from '@/pages/order/context/stage';

export const useSenderPage = () => {
  const createOrderForm = useFormContext();
  const stage = useStage();

  const goToSenderPoint = () => {
    stage.setStage('sendPoint');
  };

  const goBack = () => {
    stage.setStage('receiver');
  };
  return {
    state: { createOrderForm },
    functions: { goToSenderPoint, goBack }
  };
};
