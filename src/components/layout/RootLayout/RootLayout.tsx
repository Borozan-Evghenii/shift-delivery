import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Header } from './components/header/Header';

export const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <TanStackRouterDevtools initialIsOpen={false} />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);
