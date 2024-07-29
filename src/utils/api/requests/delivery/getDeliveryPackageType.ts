import { api } from '@api/instance';

import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { DeliveryPointsResponse } from '../../../../../@types/models';

type GetDeliveryPackageType = AxiosRequestConfig;

export const getDeliveryPackageType = async ({ config }: GetDeliveryPackageType) =>
  api.get<DeliveryPointsResponse>('/delivery/package/type', config);
