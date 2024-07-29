import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { DeliveryOrderResponse } from '../../../../../@types/models';
import { api } from '../../instance';

type GetDeliveryOrderById = AxiosRequestConfig<{ id: string | number }>;

export const getDeliveryOrderById = async ({ config, params }: GetDeliveryOrderById) =>
  api.get<DeliveryOrderResponse>(`/delivery/orders/${params.id}`, config);
