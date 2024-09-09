import { api } from '@/utils/api/instance';

import type { RequestConfig } from '../../../../../../@types/api';
import type { BaseResponse, CancelDeliveryOrderDto } from '../../../../../../@types/models';

export type CancelDeliveryOrderById = RequestConfig<CancelDeliveryOrderDto>;

export const cancelDeliveryOrderById = async ({ params, config }: CancelDeliveryOrderById) =>
  api.put<BaseResponse, CancelDeliveryOrderById>(`/delivery/orders/cancel`, params, config);
