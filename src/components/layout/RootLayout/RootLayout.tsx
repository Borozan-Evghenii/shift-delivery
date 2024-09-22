import { Outlet } from '@tanstack/react-router';

import { Header } from './components/header/Header';

export const RootLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
