import * as zod from 'zod';

import { zodRules } from '@/utils/constants/validation';

export const profileSchema = zod.object({
  firstname: zodRules.firstname,
  lastname: zodRules.lastname,
  middlename: zodRules.middlename,
  phone: zodRules.phone,
  email: zod.string().email(),
  city: zod.string()
});

export type ProfileSchema = zod.infer<typeof profileSchema>;
