import { createRootRouteWithContext } from '@tanstack/react-router';

import { RootLayout } from '@/components/layout';
import { NotFoundPage } from '@/pages/notFound';

interface RouterContext {
  isAuthenticated: boolean;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <RootLayout />,
  notFoundComponent: () => <NotFoundPage />
});
