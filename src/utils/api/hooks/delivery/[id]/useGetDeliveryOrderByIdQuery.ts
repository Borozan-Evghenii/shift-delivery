import { useQuery } from '@tanstack/react-query';

import type { QuerySettings } from '../../../../../../@types/api';
import { getDeliveryOrderById } from '../../../requests';

export const useGetDeliveryOrderByIdQuery = (
  data: { id: string },
  settings?: QuerySettings<typeof getDeliveryOrderById>
) =>
  useQuery({
    queryKey: ['useGetDeliveryOrderByIdQuery', data.id],
    queryFn: () => getDeliveryOrderById({ params: data, config: settings?.config }),
    ...settings?.options
  });
