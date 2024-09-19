import { Link } from '@tanstack/react-router';

import { PageLayout } from '@/components/layout';
import { Button, Typography } from '@/components/ui';
import { ROUTE } from '@/utils/constants';

export const NotFoundPage = () => (
  <PageLayout>
    <div className='flex h-full w-full flex-col items-center justify-center gap-4 text-center'>
      <p className='animate-pulse text-[220px]'>📦</p>
      <Typography variant='title-h1'>Not Found Page</Typography>
      <Link className='mt-6' to={ROUTE.INDEX}>
        <Button> Return to main page</Button>
      </Link>
    </div>
  </PageLayout>
);
