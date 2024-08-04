import { api } from '@api/instance';

import type { RequestConfig } from '../../../../../@types/api';
import type { CreateDeliveryOrderDto, DeliverResponse } from '../../../../../@types/models';

export type PostDeliveryOrder = RequestConfig<CreateDeliveryOrderDto>;

export const postDeliveryOrder = async ({ params, config }: PostDeliveryOrder) =>
  api.post<DeliverResponse>('/delivery/order', params, config);
