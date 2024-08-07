import { useQuery } from '@tanstack/react-query';

import type { QuerySettings } from '../../../../../@types/api';
import { getUserSession } from '../../requests';

export const useGetUsersSessionQuery = (settings?: QuerySettings<typeof getUserSession>) =>
  useQuery({
    queryKey: ['GetUsersSession'],
    queryFn: () => getUserSession({ config: settings?.config }),
    ...settings?.options
  });
