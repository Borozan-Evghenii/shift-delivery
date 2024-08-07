import { createFileRoute } from '@tanstack/react-router';

import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.PROFILE)({
  component: () => <div>Hello /profile!</div>
});
