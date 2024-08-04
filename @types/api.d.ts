import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import type { BaseResponse } from './models';

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: import('axios').AxiosRequestConfig }
  : { params: Params; config?: import('axios').AxiosRequestConfig };

interface QuerySettings<Func = unknown> {
  config?: import('axios').AxiosRequestConfig;
  options?: Omit<
    UseQueryOptions<
      Awaited<ReturnType<Func>>,
      AxiosResponse<BaseResponse>,
      Awaited<ReturnType<Func>>
    >,
    'queryKey' | 'queryFn'
  >;
}

interface MutationSettings<Params = void, Func = unknown> {
  config?: import('axios').AxiosRequestConfig;
  options?: UseMutationOptions<Awaited<ReturnType<Func>>, AxiosResponse<BaseResponse>, Params>;
}
