import { api } from '@api/instance';

import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { DeliveryPointsResponse } from '../../../../../@types/models';

type GetDeliveryPoints = AxiosRequestConfig;

export const getDeliveryPoints = async ({ config }: GetDeliveryPoints) =>
  api.get<DeliveryPointsResponse>('/delivery/points', config);
