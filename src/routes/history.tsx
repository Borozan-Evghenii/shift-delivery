import { createFileRoute } from '@tanstack/react-router';

import { HistoryPage } from '@/pages/history';
import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.HISTORY)({
  component: () => <HistoryPage />
});
