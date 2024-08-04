import { api } from '@api/instance';

import type { RequestConfig } from '../../../../../@types/api';
import type { CalculateDeliveryDto, CalculateDeliveryResponse } from '../../../../../@types/models';

export type PostDeliveryCalc = RequestConfig<CalculateDeliveryDto>;

export const postDeliveryCalc = async ({ params, config }: PostDeliveryCalc) =>
  api.post<CalculateDeliveryResponse>('/delivery/calc', params, config);
