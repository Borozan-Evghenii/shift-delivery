import { api } from '@api/instance';

import type { RequestConfig } from '../../../../../@types/api';
import type { DeliveryPointsResponse } from '../../../../../@types/models';

export type GetDeliveryPackageType = RequestConfig;

export const getDeliveryPackageType = async ({ config }: GetDeliveryPackageType) =>
  api.get<DeliveryPointsResponse>('/delivery/package/type', config);
