import { createFileRoute } from '@tanstack/react-router';

import { IndexPage } from '@/pages';
import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.INDEX)({
  component: () => <IndexPage />
});
