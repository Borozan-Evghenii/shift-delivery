import * as zod from 'zod';

export const firstname = zod
  .string({ required_error: 'Поле является обязательным' })
  .max(60, { message: 'Вы превысили лимит по символам 60' })
  .regex(/^[a-zA-Z]+/, { message: 'Cтрока начинается только с букв' })
  .regex(/(?:[ '’_][a-zA-Z]+)*/, {
    message: 'Используйте только разрешенные символы " " , ` ‘ -'
  });
