import { useForm } from 'react-hook-form';

import {
  useGetDeliveryPoints,
  useGetUsersSessionQuery,
  useUpdateUserProfileMutation
} from '@/utils/api';

import type { User } from '../../../../@types/models';

export const useProfilePage = () => {
  const user = useGetUsersSessionQuery({ options: { gcTime: 0 } });
  const userMutate = useUpdateUserProfileMutation();
  const city = useGetDeliveryPoints();
  const form = useForm<User>({ values: user.data?.data.user });

  const onSubmit = form.handleSubmit(
    (data: User) => {
      userMutate.mutate(
        {
          params: {
            profile: {
              firstname: data.firstname!,
              lastname: data.lastname!,
              middlename: data.middlename!,
              city: data.city!,
              email: data.email!
            },
            phone: data.phone
          }
        },
        {
          onSuccess: () => {
            user.refetch().catch((err) => {
              console.log(err);
            });

            console.log('succes notification');
          },
          onError: (err) => console.log('error notification', err)
        }
      );
    },
    (err) => console.log('@submit error', err)
  );

  return {
    state: { form, city, user },
    functions: { onSubmit }
  };
};
