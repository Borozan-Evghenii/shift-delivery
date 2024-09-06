import * as zod from 'zod';

export const optionsSchema = zod.object({
  id: zod.string().min(1),
  price: zod.number().min(1),
  days: zod.number().min(1),
  name: zod.string().min(1),
  type: zod.union([zod.literal('DEFAULT'), zod.literal('EXPRESS')])
});
