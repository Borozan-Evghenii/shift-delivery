import { createRootRouteWithContext } from '@tanstack/react-router';

import { RootLayout } from '@/components/layout';

interface RouterContext {
  isAuthenticated: boolean;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <RootLayout />
});
