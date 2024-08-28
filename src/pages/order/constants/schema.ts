import * as zod from 'zod';

const DeliveryType = zod.union([zod.literal('DEFAULT'), zod.literal('EXPRESS')]);

export const createOrderFormSchema = zod.object({
  option: zod.object({
    id: zod.string().min(1),
    price: zod.number().min(1),
    days: zod.number().min(1),
    name: zod.string().min(1),
    type: DeliveryType
  }),
  senderPoint: zod.object({
    id: zod.string().min(1),
    name: zod.string().min(1),
    latitude: zod.number().min(1),
    longitude: zod.number().min(1)
  }),
  senderAdress: zod.object({
    street: zod.string().min(1),
    house: zod.string().min(1),
    apartament: zod.number().min(1),
    comment: zod.string().min(1)
  }),
  sender: zod.object({
    phone: zod.string().min(1),
    firstname: zod
      .string({ required_error: 'Поле является обязательным' })
      .min(1)
      .max(60)
      .regex(/^[a-zA-Z]+(?:[ '’-][a-zA-Z]+)*$/, {
        message: 'Use only allowed symbols  " " ,  ` ‘ -'
      }),
    lastname: zod.string().min(1),
    middlename: zod.string().optional()
  }),
  receiverPoint: zod.object({
    street: zod.string().min(1),
    house: zod.string().min(1),
    apartament: zod.number().min(1),
    comment: zod.string().min(1)
  }),
  receiver: zod.object({
    phone: zod.string().min(8).max(11),
    firstname: zod
      .string({ required_error: 'Поле является обязательным' })
      .max(60, { message: 'Вы превысили лимит по символам 60' })
      .regex(/^[a-zA-Z]+/, { message: 'Cтрока начинается только с букв' })
      .regex(/(?:[ '’_][a-zA-Z]+)*/, {
        message: 'Используйте только разрешенные символы " " , ` ‘ -'
      }),
    lastname: zod
      .string({ required_error: 'Поле является обязательным' })
      .regex(/^(?!.*([!@#$%^&*()_+\-=\]{};':"\\|,.<>/?\s])\1).+$/, {
        message: 'Не используйте 2 последовательных специальных символа, включая пробел'
      })
      .regex(/^[a-zA-Z]+/, { message: 'Cтрока начинается только с букв' })
      .regex(/(?:[ '’_][a-zA-Z]+)*/, {
        message: 'Используйте только разрешенные символы " " , ` ‘ -'
      }),
    middlename: zod
      .string()
      .max(60)
      .regex(/^(?:[a-zA-Zа-яА-ЯёЁ\s\p{P}]+)$/u, {
        message:
          'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского'
      })
      .regex(/^(?:[a-zA-Z\s]+|[а-яА-ЯёЁ\s]+)$/, {
        message: 'Значения заданы с использованием разных алфавитов'
      })
      .regex(
        /^(?:(?!-)(?!.*--)(?!.*-.*-)[a-zA-Z\s-]+(?<!-)$|(?:(?!-)(?!.*--)(?!.*-.*-)[а-яА-ЯёЁ\s-]+(?<!-)$))$/,
        {
          message: 'Некорректный формат'
        }
      )
      // .regex(/^[~!@#$%^&*()_+=[\]{};:"|\\./<>?\s]*$/, {
      //   message: 'Не используйте специальных символов,'
      // })
      .optional()
  }),
  payer: zod.string().min(1)
});

export type CreateOrderFormSchemaType = zod.infer<typeof createOrderFormSchema>;
