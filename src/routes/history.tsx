import { createFileRoute } from '@tanstack/react-router';

import { HistoryPage } from '@/pages';
import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.HISTORY)({
  component: () => <HistoryPage />
});
