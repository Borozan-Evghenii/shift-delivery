import { api } from '@api/instance';

import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { CalculateDeliveryDto, CalculateDeliveryResponse } from '../../../../../@types/models';

type PostDeliveryCalc = AxiosRequestConfig<CalculateDeliveryDto>;

export const postDeliveryCalc = async ({ params, config }: PostDeliveryCalc) =>
  api.post<CalculateDeliveryResponse>('/delivery/calc', params, config);
