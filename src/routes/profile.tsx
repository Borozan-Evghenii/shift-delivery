import { createFileRoute } from '@tanstack/react-router';

import { ProfilePage } from '@/pages/profile';
import { ROUTE } from '@/utils/constants';

export const Route = createFileRoute(ROUTE.PROFILE)({
  component: () => <ProfilePage />
});
