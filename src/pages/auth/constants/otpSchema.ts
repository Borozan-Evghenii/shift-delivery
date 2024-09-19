import * as zod from 'zod';

import { zodRules } from '@/utils/constants/validation';

export const otpSchema = zod.object({
  phone: zodRules.phone,
  code: zod.string().optional()
});

export type OtpType = zod.infer<typeof otpSchema>;
