import { createLazyFileRoute } from '@tanstack/react-router';

import { LoadingOrderById, OrderById } from '@/pages/history/orderId';
import { ROUTE } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTE.HISTORY_ORDER_ID)({
  component: OrderById,
  pendingComponent: LoadingOrderById
});
