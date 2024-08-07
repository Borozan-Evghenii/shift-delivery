import { createLazyFileRoute } from '@tanstack/react-router';

import { HistoryLoading, HistoryPage } from '@/pages/history';
import { ROUTE } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTE.HISTORY)({
  component: () => <HistoryPage />,
  pendingComponent: () => <HistoryLoading />
});
