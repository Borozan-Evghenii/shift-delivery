import type { RequestConfig } from '../../../../../@types/api';
import type { SignInDto, SignInResponse } from '../../../../../@types/models';
import { api } from '../../instance';

export type PostUserSignIn = RequestConfig<SignInDto>;

export const postUserSignIn = async ({ config, params }: PostUserSignIn) =>
  api.post<SignInResponse>('/users/signin', params, config);
