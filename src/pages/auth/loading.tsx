import { PageLayout } from '@/components/layout';

export const AuthLoading = () => (
  <PageLayout>
    <div className='h-[40px] w-[400px] animate-pulse rounded-3xl bg-secondary' />
    <div className='flex w-full gap-6'>
      <div className='h-[40px] w-full animate-pulse rounded-3xl bg-secondary' />
      <div className='h-[40px] w-full animate-pulse rounded-3xl bg-secondary' />
    </div>
  </PageLayout>
);
