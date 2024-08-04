import type { RequestConfig } from '../../../../../@types/api';
import type { BaseResponse, CancelDeliveryOrderDto } from '../../../../../@types/models';
import { api } from '../../instance';

export type CancelDeliveryOrderById = RequestConfig<CancelDeliveryOrderDto>;

export const cancelDeliveryOrderById = async ({ params, config }: CancelDeliveryOrderById) =>
  api.put<BaseResponse, CancelDeliveryOrderById>(`/delivery/orders/cancel`, params, config);
