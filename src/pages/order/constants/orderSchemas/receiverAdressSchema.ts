import * as zod from 'zod';

import { zodRules } from '@/utils/constants/validation';

export const receiverAdressSchema = zod.object({
  street: zodRules.deliveryStreet,
  house: zodRules.deliveryHome,
  apartment: zodRules.deliveryApartament,
  comment: zodRules.deliveryComment
});
