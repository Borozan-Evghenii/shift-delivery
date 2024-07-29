import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { SessionResponse } from '../../../../../@types/models';
import { api } from '../../instance';

export const getUserSession = async ({ config }: AxiosRequestConfig) =>
  api.get<SessionResponse>('/users/session', config);
