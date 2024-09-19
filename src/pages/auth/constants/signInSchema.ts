import * as zod from 'zod';

import { zodRules } from '@/utils/constants/validation';

export const signInSchema = zod.object({
  phone: zodRules.phone,

  code: zod
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(6, { message: 'Код должен содержать 6 цифр' })
    .max(6, { message: 'Код должен содержать 6 цифр' })
});

export type SignInType = zod.infer<typeof signInSchema>;
