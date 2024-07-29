import type { AxiosRequestConfig } from '../../../../../@types/api';
import type { UpdateProfileDto, UpdateProfileResponse } from '../../../../../@types/models';
import { api } from '../../instance';

type UpdateUserProfile = AxiosRequestConfig<UpdateProfileDto>;

export const updateUserPropfile = async ({ params, config }: UpdateUserProfile) =>
  api.patch<UpdateProfileResponse>('/', params, config);
