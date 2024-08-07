import { createFileRoute } from '@tanstack/react-router';

import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.AUTH)({
  component: () => <div>Hello /auth!</div>
});
