import { createLazyFileRoute } from '@tanstack/react-router';

import { ProfileLoading, ProfilePage } from '@/pages/profile';
import { ROUTE } from '@/utils/constants';

export const Route = createLazyFileRoute(ROUTE.PROFILE)({
  component: ProfilePage,
  pendingComponent: ProfileLoading
});
