import { api } from '@api/instance';

import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { DeliveryOrdersResponse } from '../../../../../@types/models';

type GetDeliveryOrders = AxiosRequestConfig;

export const getDeliveryOrders = async ({ config }: GetDeliveryOrders) =>
  api.get<DeliveryOrdersResponse>('/delivery/orders', config);
