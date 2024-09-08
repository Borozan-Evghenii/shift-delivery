import { useGetDeliveryOrdersQuery, useGetUsersSessionQuery } from '@/utils/api';

export const useProfilePage = () => {
  const user = useGetUsersSessionQuery();
  const history = useGetDeliveryOrdersQuery();

  return {
    state: { user, history },
    functions: {}
  };
};
