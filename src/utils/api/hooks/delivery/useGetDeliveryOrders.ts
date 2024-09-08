import { useQuery } from '@tanstack/react-query';

import type { QuerySettings } from '../../../../../@types/api';
import { getDeliveryOrders } from '../../requests';

export const useGetDeliveryOrdersQuery = (settings?: QuerySettings<typeof getDeliveryOrders>) =>
  useQuery({
    queryKey: ['useGetDeliveryOrdersQuery'],
    queryFn: () => getDeliveryOrders({ config: settings?.config }),
    ...settings?.options
  });
