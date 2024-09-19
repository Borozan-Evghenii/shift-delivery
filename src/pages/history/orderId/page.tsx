import { useParams } from '@tanstack/react-router';

import { PageLayout } from '@/components/layout';
import { Typography } from '@/components/ui';
import { ROUTE } from '@/utils/constants';

export const OrderById = () => {
  const { id } = useParams({ from: ROUTE.HISTORY_ORDER_ID });

  return (
    <PageLayout>
      <Typography variant='title-h2'>Page id {id}</Typography>
    </PageLayout>
  );
};
