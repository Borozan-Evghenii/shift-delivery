import { useSearch } from '@tanstack/react-router';
import React from 'react';

import { useStage } from '@/pages/order/context/stage';
import { usePostDeliveryCalcMutation } from '@/utils/api';
import { ROUTE } from '@/utils/constants';

export const useDeliveryMethod = () => {
  const { setStage } = useStage();
  const data = useSearch({ from: ROUTE.ORDER });

  const mutate = usePostDeliveryCalcMutation();

  React.useEffect(() => {
    mutate.mutate({ params: data });
  }, []);

  const goToSender = () => setStage('sender');

  return {
    state: { data: mutate },
    function: { next: goToSender }
  };
};
