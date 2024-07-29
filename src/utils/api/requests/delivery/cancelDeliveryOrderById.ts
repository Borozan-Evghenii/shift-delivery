import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { BaseResponse, CancelDeliveryOrderDto } from '../../../../../@types/models';
import { api } from '../../instance';

type CancelDeliveryOrderById = AxiosRequestConfig<CancelDeliveryOrderDto>;

export const cancelDeliveryOrderById = async ({ params, config }: CancelDeliveryOrderById) =>
  api.put<BaseResponse>(`/delivery/orders/cancel`, params, config);
