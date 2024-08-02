import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import type { BaseResponse, SessionResponse } from '../../../../../@types/models';
import { getUserSession } from '../../requests';

interface UseUsersSessionQueryParams {
  config?: AxiosRequestConfig;
  options?: UseQueryOptions<AxiosResponse<SessionResponse>, AxiosResponse<BaseResponse>>;
}

export const useUsersSessionQuery = (params?: UseUsersSessionQueryParams) =>
  useQuery({
    queryKey: ['GetUsersSession'],
    queryFn: () => getUserSession({ config: params?.config }),
    ...params?.options
  });
