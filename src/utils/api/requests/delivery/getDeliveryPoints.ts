import { api } from '@api/instance';

import type { RequestConfig } from '../../../../../@types/api';
import type { DeliveryPointsResponse } from '../../../../../@types/models';

export type GetDeliveryPoints = RequestConfig;

export const getDeliveryPoints = async ({ config }: GetDeliveryPoints) =>
  api.get<DeliveryPointsResponse>('/delivery/points', config);
