import { useMutation } from '@tanstack/react-query';

import type { MutationSettings } from '../../../../../@types/api';
import type { UpdateUserProfile } from '../../requests';
import { updateUserPropfile } from '../../requests';

export const useUpdateUserProfileMutation = (
  settings?: MutationSettings<UpdateUserProfile, typeof updateUserPropfile>
) =>
  useMutation({
    mutationKey: ['useUpdateUserProfileMutation'],
    mutationFn: ({ params, config }) => updateUserPropfile({ params, config }),
    ...settings?.options
  });
