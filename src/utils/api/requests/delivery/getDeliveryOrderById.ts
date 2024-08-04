import type { RequestConfig } from '../../../../../@types/api';
import type { DeliveryOrderResponse } from '../../../../../@types/models';
import { api } from '../../instance';

export type GetDeliveryOrderById = RequestConfig<{ id: string }>;

export const getDeliveryOrderById = async ({ config, params }: GetDeliveryOrderById) =>
  api.get<DeliveryOrderResponse>(`/delivery/orders/${params.id}`, config);
