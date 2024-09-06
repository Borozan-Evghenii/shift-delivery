import React from 'react';

import type { OrderFormSchemaType } from '@/pages/order/constants/schema';
import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';
import { usePostDeliveryOrderMutation } from '@/utils/api';

export const useStageContainer = () => {
  const mutate = usePostDeliveryOrderMutation();
  const { stage } = useStage();
  const createOrderForm = useCreateOrderFormContext();
  const [open, setOpen] = React.useState(false);

  const onSubmit = (data: OrderFormSchemaType) => {
    mutate.mutate(
      { params: { ...data } },
      {
        onSuccess: () => {
          setOpen(true);
        }
      }
    );
  };

  return {
    state: { createOrderForm, stage, modal: { open, setOpen }, mutate },
    functions: { onSubmit }
  };
};
