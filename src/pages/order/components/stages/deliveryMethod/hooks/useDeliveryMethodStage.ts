import { useSearch } from '@tanstack/react-router';
import React from 'react';

import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';
import { usePostDeliveryCalcMutation } from '@/utils/api';
import { ROUTE } from '@/utils/constants';

import type { DeliveryOption } from '../../../../../../../@types/models';

export const useDeliveryMethodStage = () => {
  const data = useSearch({ from: ROUTE.ORDER });
  const createOrderForm = useCreateOrderFormContext();
  const stage = useStage();

  const mutate = usePostDeliveryCalcMutation();

  React.useEffect(() => {
    mutate.mutate({ params: data });
  }, []);

  const goToSender = (option: DeliveryOption) => {
    createOrderForm.setValue('option', { ...option });
    createOrderForm.setValue('senderPoint', data.senderPoint);
    createOrderForm.setValue('receiverPoint', data?.receiverPoint);

    stage.setStage('receiver');
  };

  return {
    state: { data: mutate },
    functions: { goToSender }
  };
};
