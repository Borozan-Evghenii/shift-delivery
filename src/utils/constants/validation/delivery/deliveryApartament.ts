import * as zod from 'zod';

export const deliveryApartament = zod
  .string({ required_error: 'Поле является обязательным' })
  .min(1, { message: 'Поле является обязательным' })
  .max(100)
  .regex(/^(?![\s/':;_\-.,#])[a-zA-Zа-яА-ЯёЁ0-9\s/':;_\-.,#]*$/, {
    message: 'Недопустим ввод спец. символов в начале и в конце строки'
  });
