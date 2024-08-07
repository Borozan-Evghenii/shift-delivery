import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import { useUser } from './utils/contexts/user';

const router = createRouter({
  routeTree,
  context: {
    isAuthenticated: false
  }
});
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const user = useUser();
  return <RouterProvider context={{ isAuthenticated: !user }} router={router} />;
};
