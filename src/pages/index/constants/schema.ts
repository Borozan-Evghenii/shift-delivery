import * as zod from 'zod';

export const calcDeliverySchema = zod.object({
  package: zod.object({
    height: zod.number().min(1),
    length: zod.number().min(1),
    weight: zod.number().min(1),
    width: zod.number().min(1)
  }),
  senderPoint: zod.object({
    id: zod.string(),
    name: zod.string(),
    latitude: zod.number(),
    longitude: zod.number()
  }),
  receiverPoint: zod.object({
    id: zod.string(),
    name: zod.string(),
    latitude: zod.number(),
    longitude: zod.number()
  })
});
