import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { usePostCreateOtpMutation, usePostUserSignInMutation } from '@/utils/api';
import { LOCAL_STORAGE, ROUTE } from '@/utils/constants';
import { useAuthContext } from '@/utils/contexts/session';

import type { OtpType } from '../constants/otpSchema';
import { otpSchema } from '../constants/otpSchema';
import type { SignInType } from '../constants/signInSchema';
import { signInSchema } from '../constants/signInSchema';

type Stage = 'PHONE' | 'CONFIRMATION';

export const useAuthPage = () => {
  const [stage, setStage] = React.useState<Stage>('PHONE');
  const otp = usePostCreateOtpMutation();
  const signIn = usePostUserSignInMutation();
  const { setIsAuth } = useAuthContext();

  const navigate = useNavigate();
  const form = useForm<SignInType | OtpType>({
    resolver: zodResolver(stage === 'PHONE' ? otpSchema : signInSchema),
    mode: 'onChange'
  });

  const onSubmit = form.handleSubmit(
    ({ phone, code }) => {
      if (stage === 'PHONE') {
        otp.mutate(
          { params: { phone } },
          {
            onSuccess: () => {
              setStage('CONFIRMATION');
            }
          }
        );
      } else {
        signIn.mutate(
          { params: { phone, code: +code! } },
          {
            onSuccess: (data) => {
              localStorage.setItem(LOCAL_STORAGE.TOKEN, data.data.token);
              setIsAuth(true);
              navigate({
                to: ROUTE.INDEX
              }).catch((err) => console.log('@redirect on succes signin ', err));
            },

            onError: (data) => {
              form.setError('code', { type: 'validate', message: data.data.reasone });
            }
          }
        );
      }
    },
    (err) => console.log(err)
  );

  return { state: { form, stage }, funtions: { onSubmit } };
};
