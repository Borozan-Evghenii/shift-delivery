import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import type { ToastRefProps } from '@/components/ui';
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

  const toast = useRef<ToastRefProps>(null);

  const onOtp = ({ phone }: OtpType) =>
    otp.mutate(
      { params: { phone } },
      {
        onSuccess: () => {
          setStage('CONFIRMATION');
          toast.current?.publish({
            title: 'Otp code ',
            description: `Use Otp code form `,
            link: 'https://shift-backend.onrender.com/otps'
          });
        }
      }
    );

  const isDirty = form.getFieldState('code').isDirty || form.getFieldState('phone').isDirty;

  const isValid = () => {
    if (isDirty) {
      if (stage === 'PHONE') {
        return otpSchema.safeParse({ ...form.watch() }).success;
      }

      return signInSchema.safeParse({ ...form.watch() }).success;
    }

    return false;
  };

  React.useEffect(() => {
    isValid();
  }, [form.watch()]);

  const onSubmit = form.handleSubmit(
    ({ phone, code }) => {
      if (stage === 'PHONE') {
        onOtp({ phone });
      } else {
        signIn.mutate(
          { params: { phone, code: +code! } },
          {
            onSuccess: (data) => {
              localStorage.setItem(LOCAL_STORAGE.TOKEN, data.data.token);

              setIsAuth(true);
              navigate({
                to: ROUTE.INDEX
              }).catch(() => {});
            },

            onError: () => {
              toast.current?.publish({
                title: `OTP code is incorect`,
                description: `Submiting wet wrong `
              });
            }
          }
        );
      }
    },
    (err) =>
      toast.current?.publish({
        title: 'Submiting wet wrong',
        description: `Submiting wet wrong ${err.root?.message}`
      })
  );

  return { state: { form, stage, otp, toast }, functions: { onSubmit, onOtp, isValid } };
};
