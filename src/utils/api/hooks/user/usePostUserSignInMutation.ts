import { useMutation } from '@tanstack/react-query';

import type { MutationSettings } from '../../../../../@types/api';
import type { PostUserSignIn } from '../../requests';
import { postUserSignIn } from '../../requests';

export const usePostUserSignInMutation = (
  settings?: MutationSettings<PostUserSignIn, typeof postUserSignIn>
) =>
  useMutation({
    mutationKey: ['UserSignIn'],
    mutationFn: ({ params, config }) => postUserSignIn({ params, config }),
    ...settings?.options
  });
