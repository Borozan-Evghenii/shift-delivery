import { api } from '@/utils/api/instance';

import type { RequestConfig } from '../../../../../../@types/api';
import type { DeliveryOrderResponse } from '../../../../../../@types/models';

export type GetDeliveryOrderById = RequestConfig<{ id: string }>;

export const getDeliveryOrderById = async ({ config, params }: GetDeliveryOrderById) =>
  api.get<DeliveryOrderResponse>(`/delivery/orders/${params.id}`, config);
