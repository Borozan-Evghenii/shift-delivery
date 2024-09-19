import { deliveryApartament } from './delivery/deliveryApartament';
import { deliveryComment } from './delivery/deliveryComment';
import { deliveryHome } from './delivery/deliveryHome';
import { deliveryOptions } from './delivery/deliveryOptions';
import { deliveryPackage } from './delivery/deliveryPackage';
import { deliveryPoint } from './delivery/deliveryPoint';
import { deliveryStreet } from './delivery/deliveryStreet';
import { firstname } from './profile/firstname';
import { lastname } from './profile/lastname';
import { middlename } from './profile/middlename';
import { phone } from './profile/phone';

export const zodRules = {
  firstname,
  middlename,
  lastname,
  phone,
  deliveryPoint,
  deliveryPackage,
  deliveryStreet,
  deliveryHome,
  deliveryApartament,
  deliveryComment,
  deliveryOptions
};
