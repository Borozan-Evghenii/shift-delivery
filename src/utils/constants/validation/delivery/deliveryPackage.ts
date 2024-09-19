import * as zod from 'zod';

export const deliveryPackage = zod.object({
  height: zod.number().min(1),
  length: zod.number().min(1),
  weight: zod.number().min(1),
  width: zod.number().min(1)
});
