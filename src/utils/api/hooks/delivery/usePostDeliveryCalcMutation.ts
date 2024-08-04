import { useMutation } from '@tanstack/react-query';

import type { MutationSettings } from '../../../../../@types/api';
import type { PostDeliveryCalc } from '../../requests';
import { postDeliveryCalc } from '../../requests';

export const usePostDeliveryCalcMutation = (
  settings?: MutationSettings<PostDeliveryCalc, typeof postDeliveryCalc>
) =>
  useMutation({
    mutationKey: ['usePostDeliveryCalcMutation'],
    mutationFn: ({ params, config }) => postDeliveryCalc({ params, config }),
    ...settings?.options
  });
