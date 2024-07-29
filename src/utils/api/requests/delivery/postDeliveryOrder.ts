import { api } from '@api/instance';

import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { CreateDeliveryOrderDto, DeliverResponse } from '../../../../../@types/models';

type PostDeliveryOrder = AxiosRequestConfig<CreateDeliveryOrderDto>;

export const postDeliveryOrder = async ({ params, config }: PostDeliveryOrder) =>
  api.post<DeliverResponse>('/delivery/order', params, config);
