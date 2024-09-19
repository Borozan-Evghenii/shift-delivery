import * as zod from 'zod';

import { zodRules } from '@/utils/constants/validation';

export const receiverSchema = zod.object({
  phone: zodRules.phone,
  firstname: zodRules.firstname,
  lastname: zodRules.lastname,
  middlename: zodRules.middlename
});
