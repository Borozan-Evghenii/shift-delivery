import * as zod from 'zod';

export const deliveryPoint = zod.object({
  id: zod.string(),
  name: zod.string(),
  latitude: zod.number(),
  longitude: zod.number()
});
