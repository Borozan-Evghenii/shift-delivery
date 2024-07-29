import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { CreateOtpDto, OtpResponse } from '../../../../../@types/models';
import { api } from '../../instance';

type PostCreateOtp = AxiosRequestConfig<CreateOtpDto>;
export const postCreateOtp = async ({ params, config }: PostCreateOtp) =>
  api.post<OtpResponse>('/auth/otp', params, config);
