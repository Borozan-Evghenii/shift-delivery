import { api } from '@api/instance';

import type { RequestConfig } from '../../../../../@types/api';
import type { DeliveryOrdersResponse } from '../../../../../@types/models';

export type GetDeliveryOrders = RequestConfig;

export const getDeliveryOrders = async ({ config }: GetDeliveryOrders) =>
  api.get<DeliveryOrdersResponse>('/delivery/orders', config);
