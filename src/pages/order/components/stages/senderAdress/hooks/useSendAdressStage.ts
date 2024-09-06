import React from 'react';

import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

import { senderAdressSchema } from '../../../../constants/orderSchemas/senderAdressSchema';

export const useSenderAdressStage = () => {
  const stage = useStage();
  const createOrderForm = useCreateOrderFormContext();

  const goToReceivPoint = () => {
    stage.setStage('receivPoint');
  };

  const goBack = () => {
    stage.setStage('sender');
  };

  const isDirtyStage =
    createOrderForm.getFieldState('senderAddress.street').isDirty &&
    createOrderForm.getFieldState('senderAddress.apartment').isDirty &&
    createOrderForm.getFieldState('senderAddress.house').isDirty;

  const isStageValid = () => {
    if (createOrderForm.watch('senderAddress') && isDirtyStage) {
      return senderAdressSchema.safeParse({ ...createOrderForm.watch('senderAddress') }).success;
    }

    return false;
  };

  React.useEffect(() => {
    isStageValid();
  }, [createOrderForm.watch('senderAddress')]);

  return { state: { createOrderForm, isStageValid }, functions: { goBack, goToReceivPoint } };
};
