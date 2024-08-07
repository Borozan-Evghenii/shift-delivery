import { useQuery } from '@tanstack/react-query';

import type { QuerySettings } from '../../../../../@types/api';
import type { getDeliveryPoints } from '../../requests';
import { getDeliveryPackageType } from '../../requests';

export const useGetDeliveryPackageTypesQuery = (
  settings?: QuerySettings<typeof getDeliveryPoints>
) =>
  useQuery({
    queryKey: ['getDeliveryPackageType'],
    queryFn: () => getDeliveryPackageType({ config: settings?.config }),
    ...settings?.options
  });
