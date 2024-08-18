import { useQuery } from '@tanstack/react-query';

import type { QuerySettings } from '../../../../../@types/api';
import { getDeliveryPackageType } from '../../requests';

export const useGetDeliveryPackageTypesQuery = (
  settings?: QuerySettings<typeof getDeliveryPackageType>
) =>
  useQuery({
    queryKey: ['getDeliveryPackageType'],
    queryFn: () => getDeliveryPackageType({ config: settings?.config }),
    ...settings?.options
  });
