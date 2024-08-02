import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { SignInDto, SignInResponse } from '../../../../../@types/models';
import { api } from '../../instance';

type PostUserSignIn = AxiosRequestConfig<SignInDto>;

export const postUserSignIn = async ({ config, params }: PostUserSignIn) =>
  api.post<SignInResponse>('/users/signin', params, config);
