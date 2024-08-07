import { createLazyFileRoute } from '@tanstack/react-router';

import { IndexLoading, IndexPage } from '@/pages/index';
import { ROUTE } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTE.INDEX)({
  component: () => <IndexPage />,
  pendingComponent: () => <IndexLoading />
});
