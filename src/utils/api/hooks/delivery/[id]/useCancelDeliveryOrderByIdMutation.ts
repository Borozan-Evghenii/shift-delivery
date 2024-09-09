import { useMutation } from '@tanstack/react-query';

import type { MutationSettings } from '../../../../../../@types/api';
import type { CancelDeliveryOrderById } from '../../../requests';
import { cancelDeliveryOrderById } from '../../../requests';

export const useCancelDeliveryOrderByIdMutation = (
  settings?: MutationSettings<CancelDeliveryOrderById, typeof cancelDeliveryOrderById>
) =>
  useMutation({
    mutationKey: ['UseCancelDeliveryOrderByIdMutationOptions'],
    mutationFn: ({ params, config }) =>
      cancelDeliveryOrderById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
