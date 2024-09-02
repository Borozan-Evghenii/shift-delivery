import * as zod from 'zod';

const DeliveryType = zod.union([zod.literal('DEFAULT'), zod.literal('EXPRESS')]);

export const optionsSchema = zod.object({
  id: zod.string().min(1),
  price: zod.number().min(1),
  days: zod.number().min(1),
  name: zod.string().min(1),
  type: DeliveryType
});
