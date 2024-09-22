import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import type { ToastRefProps } from '@/components/ui';
import {
  useGetDeliveryPoints,
  useGetUsersSessionQuery,
  useUpdateUserProfileMutation
} from '@/utils/api';

import type { User } from '../../../../@types/models';
import { profileSchema, type ProfileSchema } from '../constants/schema';

export const useProfilePage = () => {
  const user = useGetUsersSessionQuery({ options: { gcTime: 0 } });
  const userMutate = useUpdateUserProfileMutation();
  const city = useGetDeliveryPoints();
  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    values: user.data?.data.user,
    mode: 'onChange'
  });
  const toast = React.useRef<ToastRefProps>(null);

  const onSubmit = form.handleSubmit(
    (data: User) => {
      userMutate.mutate(
        {
          params: {
            profile: {
              firstname: data.firstname,
              lastname: data.lastname,
              middlename: data.middlename!,
              city: data.city,
              email: data.email
            },
            phone: data.phone
          }
        },
        {
          onSuccess: () => {
            user.refetch().catch(() => {
              toast.current?.publish({
                title: 'Profile refetch wet wrong',
                description: `Profile data cannot be refetched from server`
              });
            });
            toast.current?.publish({
              title: 'Profile is updated',
              description: 'Profile data is updated on server'
            });
          },
          onError: (err) =>
            toast.current?.publish({
              title: 'Some wet wrong',
              description: `Profile data is updated on server ${err.data.reasone}`
            })
        }
      );
    },
    (err) =>
      toast.current?.publish({
        title: 'Submiting wet wrong',
        description: `Profile data is updated on server ${err.root?.message}`
      })
  );

  return {
    state: { form, city, user, toast },
    functions: { onSubmit }
  };
};
