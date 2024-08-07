import { createFileRoute } from '@tanstack/react-router';

import { AuthPage } from '@/pages/auth';
import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.AUTH)({
  component: () => <AuthPage />
});
