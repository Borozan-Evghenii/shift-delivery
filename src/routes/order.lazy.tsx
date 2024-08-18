import { createLazyFileRoute } from '@tanstack/react-router';

import { OrderLoading, OrderPage } from '@/pages/order';
import { ROUTE } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTE.ORDER)({
  component: () => <OrderPage />,
  pendingComponent: () => <OrderLoading />
});
