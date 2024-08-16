import { api } from '@api/instance';

import type { RequestConfig } from '../../../../../@types/api';
import type { DeliveryPackageTypesResponse } from '../../../../../@types/models';

export type GetDeliveryPackageType = RequestConfig;

export const getDeliveryPackageType = async ({ config }: GetDeliveryPackageType) =>
  api.get<DeliveryPackageTypesResponse>('/delivery/package/types', config);
