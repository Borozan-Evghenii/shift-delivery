import { useQuery } from '@tanstack/react-query';

import type { QuerySettings } from '../../../../../@types/api';
import { getDeliveryPoints } from '../../requests';

export const useGetDeliveryPoints = (settings?: QuerySettings<typeof getDeliveryPoints>) =>
  useQuery({
    queryKey: ['getDeliveryPoints'],
    queryFn: () => getDeliveryPoints({ config: settings?.config }),
    ...settings?.options
  });
