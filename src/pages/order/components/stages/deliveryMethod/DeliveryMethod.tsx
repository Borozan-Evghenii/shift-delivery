import { PageLayout } from '@/components/layout';
import { Typography } from '@/components/ui';

import { DeliveryCard } from './components/deliveryCard/DeliveryCard';
import { useDeliveryMethod } from './hooks/useDeliveryMethod';
import { DeliveryMethodLoading } from './loading';

export const DeliveryMethod = () => {
  const { state } = useDeliveryMethod();

  if (state.data.isPending) {
    return <DeliveryMethodLoading />;
  }

  return (
    <PageLayout>
      <Typography variant='title-h2'>Способ отправки</Typography>
      <div className='flex w-full gap-6'>
        {state.data.data?.data.options.map((option) => (
          <DeliveryCard key={option.id} data={option} />
        ))}
      </div>
    </PageLayout>
  );
};
