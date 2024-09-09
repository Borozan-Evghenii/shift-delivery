import { useGetDeliveryOrdersQuery } from '@/utils/api';

export const useHistoryPage = () => {
  const orders = useGetDeliveryOrdersQuery();

  return { state: { orders }, functions: {} };
};
