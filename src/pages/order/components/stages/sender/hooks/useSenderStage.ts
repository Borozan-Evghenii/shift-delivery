import React from 'react';

import { senderSchema } from '@/pages/order/constants/orderSchemas';
import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

export const useSenderStage = () => {
  const createOrderForm = useCreateOrderFormContext();
  const stage = useStage();

  const goToSenderPoint = () => {
    stage.setStage('sendPoint');
  };

  const goBack = () => {
    stage.setStage('receiver');
  };

  const isDirtyStage =
    createOrderForm.getFieldState('sender.phone').isDirty &&
    createOrderForm.getFieldState('sender.firstname').isDirty &&
    createOrderForm.getFieldState('sender.lastname').isDirty;

  const isStageValid = () => {
    if (createOrderForm.watch('sender') && isDirtyStage) {
      return senderSchema.safeParse({ ...createOrderForm.watch('sender') }).success;
    }

    return false;
  };

  React.useEffect(() => {
    isStageValid();
  }, [createOrderForm.watch('sender')]);

  return {
    state: { createOrderForm, isStageValid },
    functions: { goToSenderPoint, goBack }
  };
};
