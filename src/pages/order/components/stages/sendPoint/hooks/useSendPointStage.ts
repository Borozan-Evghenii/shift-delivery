import React from 'react';

import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

import { senderPointSchema } from '../../../../constants/orderSchemas/senderPointSchema';

export const useSendPointStage = () => {
  const stage = useStage();
  const createOrderForm = useCreateOrderFormContext();

  const goToReceivPoint = () => {
    stage.setStage('receivPoint');
  };

  const goBack = () => {
    stage.setStage('sender');
  };

  const isDirtyStage =
    createOrderForm.getFieldState('senderPoint.street').isDirty &&
    createOrderForm.getFieldState('senderPoint.house').isDirty;

  const isStageValid = () => {
    if (createOrderForm.watch('senderPoint') && isDirtyStage) {
      return senderPointSchema.safeParse({ ...createOrderForm.watch('senderPoint') }).success;
    }

    return false;
  };

  React.useEffect(() => {
    isStageValid();
  }, [createOrderForm.watch('senderPoint')]);

  return { state: { createOrderForm, isStageValid }, functions: { goBack, goToReceivPoint } };
};
