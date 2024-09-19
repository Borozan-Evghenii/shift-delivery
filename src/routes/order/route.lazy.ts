import { createLazyFileRoute } from '@tanstack/react-router';

import { OrderPage } from '@/pages/order';
import { ROUTE } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTE.ORDER)({
  component: OrderPage
});
