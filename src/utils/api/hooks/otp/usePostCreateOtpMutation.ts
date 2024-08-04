import { useMutation } from '@tanstack/react-query';

import type { MutationSettings } from '../../../../../@types/api';
import type { PostCreateOtp } from '../../requests';
import { postCreateOtp } from '../../requests';

export const usePostCreateOtpMutation = (
  settings?: MutationSettings<PostCreateOtp, typeof postCreateOtp>
) =>
  useMutation({
    mutationKey: ['postCreateOtpMutation'],
    mutationFn: ({ params, config }) => postCreateOtp({ params, config }),
    ...settings?.options
  });
