import * as zod from 'zod';

import { zodRules } from '@/utils/constants/validation';

export const calcDeliverySchema = zod.object({
  package: zodRules.deliveryPackage,
  senderPoint: zodRules.deliveryPoint,
  receiverPoint: zodRules.deliveryPoint
});

export type CalcDeliveryType = zod.infer<typeof calcDeliverySchema>;
