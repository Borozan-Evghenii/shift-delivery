import React from 'react';

import { receiverPointSchema } from '@/pages/order/constants/orderSchemas';
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

  const isDirtyStage =
    createOrderForm.getFieldState('receiverPoint.street').isDirty &&
    createOrderForm.getFieldState('receiverPoint.house').isDirty;

  const isStageValid = () => {
    if (isDirtyStage) {
      return receiverPointSchema.safeParse({ ...createOrderForm.watch('receiverPoint') }).success;
    }

    return false;
  };

  React.useEffect(() => {
    isStageValid();
  }, [createOrderForm.watch('receiverPoint')]);

  return {
    state: { createOrderForm, isStageValid },
    functions: { goToPaymentMethod, goBack }
  };
};
