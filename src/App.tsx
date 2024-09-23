import { createRouter, RouterProvider } from '@tanstack/react-router';

import { useAuthContext } from '@/utils/contexts/session';

import { NotFoundPage } from './pages/notFound';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  context: {
    isAuthenticated: true
  }
});
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const { isAuth } = useAuthContext();

  return <RouterProvider context={{ isAuthenticated: isAuth }} router={router} />;
};
