import * as zod from 'zod';

export const calcDeliverySchema = zod.object({
  package: zod.object({
    height: zod.string().min(1),
    length: zod.string().min(1),
    weight: zod.string().min(1),
    width: zod.string().min(1)
  }),
  senderPoint: zod.object({
    latitude: zod.number(),
    longitude: zod.number()
  }),
  receiverPoint: zod.object({
    latitude: zod.number(),
    longitude: zod.number()
  })
});
