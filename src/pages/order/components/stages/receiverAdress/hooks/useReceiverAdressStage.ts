import React from 'react';

import { receiverAdressSchema } from '@/pages/order/constants/orderSchemas';
import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

export const useReceiverAdressStage = () => {
  const createOrderForm = useCreateOrderFormContext();
  const stage = useStage();

  const goToPaymentMethod = () => {
    stage.setStage('paymentMethod');
  };

  const goBack = () => {
    stage.setStage('sendPoint');
  };

  const isDirtyStage =
    createOrderForm.getFieldState('receiverAddress.street').isDirty &&
    createOrderForm.getFieldState('receiverAddress.apartment').isDirty &&
    createOrderForm.getFieldState('receiverAddress.house').isDirty;

  const isStageValid = () => {
    if (isDirtyStage) {
      return receiverAdressSchema.safeParse({ ...createOrderForm.watch('receiverAddress') })
        .success;
    }

    return false;
  };

  React.useEffect(() => {
    isStageValid();
  }, [createOrderForm.watch('receiverAddress')]);

  return {
    state: { createOrderForm, isStageValid },
    functions: { goToPaymentMethod, goBack }
  };
};
