import { PageLayout } from '@/components/layout';

export const HistoryLoading = () => (
  <PageLayout>
    <div className='h-[32px] w-[150px] animate-pulse rounded-md bg-secondary' />
    <div className='h-[320px] w-full animate-pulse rounded-md bg-secondary' />
    <div className='h-[320px] w-full animate-pulse rounded-md bg-secondary' />
  </PageLayout>
);
