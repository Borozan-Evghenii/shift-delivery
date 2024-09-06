import * as zod from 'zod';

import {
  optionsSchema,
  receiverAdressSchema,
  receiverSchema,
  senderAdressSchema,
  senderSchema
} from './orderSchemas';

export const createOrderFormSchema = zod.object({
  option: optionsSchema,
  senderPoint: zod.object({
    id: zod.string(),
    longitude: zod.number(),
    latitude: zod.number(),
    name: zod.string()
  }),
  sender: senderSchema,
  receiverPoint: zod.object({
    id: zod.string(),
    longitude: zod.number(),
    latitude: zod.number(),
    name: zod.string()
  }),
  receiver: receiverSchema,
  senderAddress: senderAdressSchema,
  receiverAddress: receiverAdressSchema,
  payer: zod.union([zod.literal('RECEIVER'), zod.literal('SENDER')])
});

export type OrderFormSchemaType = zod.infer<typeof createOrderFormSchema>;
