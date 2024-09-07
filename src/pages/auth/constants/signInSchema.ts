import * as zod from 'zod';

export const signInSchema = zod.object({
  phone: zod
    .string({ required_error: 'Поле является обязательным' })
    .regex(/^(79\d{9}|0[67]\d{7})$/, { message: '068349754 | 79234232343 | 078349754' }),

  code: zod
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(6, { message: 'Код должен содержать 6 цифр' })
});

export type SignInType = zod.infer<typeof signInSchema>;
