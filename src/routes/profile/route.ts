import { createFileRoute, redirect } from '@tanstack/react-router';

import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.PROFILE)({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: ROUTE.INDEX
      });
    }
  }
});
