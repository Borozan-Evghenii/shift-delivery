import type { RequestConfig } from '../../../../../@types/api';
import type { CreateOtpDto, OtpResponse } from '../../../../../@types/models';
import { api } from '../../instance';

export type PostCreateOtp = RequestConfig<CreateOtpDto>;
export const postCreateOtp = async ({ params, config }: PostCreateOtp) =>
  api.post<OtpResponse>('/auth/otp', params, config);
