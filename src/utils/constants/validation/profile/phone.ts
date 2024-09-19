import * as zod from 'zod';

export const phone = zod
  .string({ required_error: 'Поле является обязательным' })
  .regex(/^(79\d{9}|0[67]\d{7})$/, { message: '068349754 | 79234232343 | 078349754' });
