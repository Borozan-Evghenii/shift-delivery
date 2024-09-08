import type { RequestConfig } from '../../../../../@types/api';
import type { UpdateProfileDto, UpdateProfileResponse } from '../../../../../@types/models';
import { api } from '../../instance';

export type UpdateUserProfile = RequestConfig<UpdateProfileDto>;

export const updateUserProfile = async ({ params, config }: UpdateUserProfile) =>
  api.patch<UpdateProfileResponse>('users/profile', params, config);
