import * as zod from 'zod';

export const deliveryComment = zod
  .string()
  .max(300)
  .regex(/^(?!([A-Za-z]+[А-Яа-яЁё]+|[А-Яа-яЁё]+[A-Za-z]+))\S*/, {
    message:
      'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского'
  })
  .regex(/^(?![\s/':;_\-.,#])[a-zA-Zа-яА-ЯёЁ0-9\s/':;_\-.,#]*$/, {
    message: 'Недопустим ввод спец. символов в начале и в конце строки'
  })
  .regex(/^(?!.*--)(?!^-)(?!.*-$).*/, {
    message: 'Некорректный формат'
  })
  .optional();
