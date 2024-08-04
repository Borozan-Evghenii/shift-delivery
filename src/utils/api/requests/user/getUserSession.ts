import type { RequestConfig } from '../../../../../@types/api';
import type { SessionResponse } from '../../../../../@types/models';
import { api } from '../../instance';

export const getUserSession = async ({ config }: RequestConfig) =>
  api.get<SessionResponse>('/users/session', config);
