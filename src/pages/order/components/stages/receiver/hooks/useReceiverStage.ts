import React from 'react';

import { receiverSchema } from '@/pages/order/constants/orderSchemas/receiverSchema';
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

  const isDirtyStage =
    createOrderForm.getFieldState('receiver.phone').isDirty &&
    createOrderForm.getFieldState('receiver.firstname').isDirty &&
    createOrderForm.getFieldState('receiver.lastname').isDirty;

  const isStageValid = () => {
    if (isDirtyStage) {
      return receiverSchema.safeParse({ ...createOrderForm.watch('receiver') }).success;
    }

    return false;
  };

  React.useEffect(() => {
    isStageValid();
  }, [createOrderForm.watch('receiver')]);

  return {
    state: { createOrderForm, isStageValid },
    functions: { goToSender, goBack }
  };
};
