import * as zod from 'zod';

import { zodRules } from '@/utils/constants/validation';

import {
  receiverAdressSchema,
  receiverSchema,
  senderAdressSchema,
  senderSchema
} from './orderSchemas';

export const createOrderFormSchema = zod.object({
  option: zodRules.deliveryOptions,
  senderPoint: zodRules.deliveryPoint,
  sender: senderSchema,
  receiverPoint: zodRules.deliveryPoint,
  receiver: receiverSchema,
  senderAddress: senderAdressSchema,
  receiverAddress: receiverAdressSchema,
  payer: zod.union([zod.literal('RECEIVER'), zod.literal('SENDER')])
});

export type OrderFormSchemaType = zod.infer<typeof createOrderFormSchema>;
