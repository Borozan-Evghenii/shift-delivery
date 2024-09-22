import { createLazyFileRoute } from '@tanstack/react-router';

import { HistoryLoading, HistoryPage } from '@/pages/history';

export const Route = createLazyFileRoute('/history/')({
  component: HistoryPage,
  pendingComponent: HistoryLoading
});
