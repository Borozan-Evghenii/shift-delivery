import { useMutation } from '@tanstack/react-query';

import type { MutationSettings } from '../../../../../@types/api';
import type { UpdateUserProfile } from '../../requests';
import { updateUserProfile } from '../../requests';

export const useUpdateUserProfileMutation = (
  settings?: MutationSettings<UpdateUserProfile, typeof updateUserProfile>
) =>
  useMutation({
    mutationKey: ['useUpdateUserProfileMutation'],
    mutationFn: ({ params, config }) => updateUserProfile({ params, config }),
    ...settings?.options
  });
