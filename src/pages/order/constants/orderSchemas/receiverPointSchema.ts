import * as zod from 'zod';

export const receiverPointSchema = zod.object({
  street: zod.string().min(1),
  house: zod.string().min(1),
  apartament: zod.number().min(1),
  comment: zod.string().min(1)
});
