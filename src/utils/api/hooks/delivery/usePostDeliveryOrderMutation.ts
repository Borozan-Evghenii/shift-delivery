import { useMutation } from '@tanstack/react-query';

import type { MutationSettings } from '../../../../../@types/api';
import type { PostDeliveryOrder } from '../../requests';
import { postDeliveryOrder } from '../../requests';

export const usePostDeliveryOrderMutation = (settings?: MutationSettings<PostDeliveryOrder>) =>
  useMutation({
    mutationKey: ['usePostDeliveryOrderMutation'],
    mutationFn: ({ params, config }) => postDeliveryOrder({ params, config }),
    ...settings?.options
  });
