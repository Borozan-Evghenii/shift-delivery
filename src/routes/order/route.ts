import { createFileRoute } from '@tanstack/react-router';

import { calcDeliverySchema } from '@/pages/index/constants/schema';
import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.ORDER)({
  validateSearch: calcDeliverySchema
});
