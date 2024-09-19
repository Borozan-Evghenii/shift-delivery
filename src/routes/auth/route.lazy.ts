import { createLazyFileRoute } from '@tanstack/react-router';

import { AuthLoading, AuthPage } from '@/pages/auth';
import { ROUTE } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTE.AUTH)({
  component: AuthPage,
  pendingComponent: AuthLoading
});
