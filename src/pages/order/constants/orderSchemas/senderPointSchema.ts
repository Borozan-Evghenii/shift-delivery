import * as zod from 'zod';

export const senderPointSchema = zod.object({
  id: zod.string().min(1),
  name: zod.string().min(1),
  latitude: zod.number().min(1),
  longitude: zod.number().min(1)
});
