import * as zod from 'zod';

import {
  optionsSchema,
  receiverPointSchema,
  receiverSchema,
  senderPointSchema,
  senderSchema
} from './orderSchemas';

export const createOrderFormSchema = zod.object({
  option: optionsSchema,
  senderPoint: senderPointSchema,
  sender: senderSchema,
  receiverPoint: receiverPointSchema,
  receiver: receiverSchema,
  payer: zod.string().min(1)
});

export type CreateOrderFormSchemaType = zod.infer<typeof createOrderFormSchema>;
