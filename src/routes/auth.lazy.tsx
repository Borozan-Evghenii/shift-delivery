import { createLazyFileRoute } from '@tanstack/react-router';

import { AuthLoading, AuthPage } from '@/pages/auth';

export const Route = createLazyFileRoute('/auth')({
  component: () => <AuthPage />,
  pendingComponent: () => <AuthLoading />
});
