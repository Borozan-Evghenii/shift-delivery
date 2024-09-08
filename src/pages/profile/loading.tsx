import { PageLayout } from '@/components/layout';

export const ProfileLoading = () => (
  <PageLayout>
    <div className='h-[32px] w-[150px] animate-pulse rounded-md bg-secondary' />
    <div className='grid w-full grid-cols-2 gap-6'>
      <div className='h-[58px] w-full animate-pulse rounded-3xl bg-secondary' />
      <div className='h-[58px] w-full animate-pulse rounded-3xl bg-secondary' />
      <div className='h-[58px] w-full animate-pulse rounded-3xl bg-secondary' />
      <div className='h-[58px] w-full animate-pulse rounded-3xl bg-secondary' />
      <div className='h-[58px] w-full animate-pulse rounded-3xl bg-secondary' />
      <div className='h-[58px] w-full animate-pulse rounded-3xl bg-secondary' />
    </div>
  </PageLayout>
);
