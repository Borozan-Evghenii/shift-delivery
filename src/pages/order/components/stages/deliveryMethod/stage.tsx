import { PageLayout } from '@/components/layout';
import { Typography } from '@/components/ui';

import { DeliveryCard } from './components/deliveryCard/DeliveryCard';
import { useDeliveryMethodStage } from './hooks/useDeliveryMethodStage';
import { DeliveryMethodLoading } from './loading';

export const DeliveryMethod = () => {
  const { state, functions } = useDeliveryMethodStage();

  if (state.data.isPending) {
    return <DeliveryMethodLoading />;
  }

  return (
    <PageLayout>
      <Typography variant='title-h2'>Способ отправки</Typography>
      <div className='flex w-full gap-6'>
        {state.data.data?.data.options.map((option) => (
          <DeliveryCard
            key={option.id}
            data={option}
            onClick={() => functions.goToSender(option)}
          />
        ))}
      </div>
    </PageLayout>
  );
};
