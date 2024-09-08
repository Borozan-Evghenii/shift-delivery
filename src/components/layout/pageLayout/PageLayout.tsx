import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className='container flex h-[100vh] w-full flex-col items-start gap-6 pt-36'>{children}</div>
);
