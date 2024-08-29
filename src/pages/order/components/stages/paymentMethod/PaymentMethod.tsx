import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { usePaymentMethodPage } from './hooks/usePaymentMethodPage';

export const PaymentMethod = () => {
  const paymentMethod = usePaymentMethodPage();

  return (
    <PageLayout>
      <Input type='checkbox' />
      <Typography variant='title-h2'>Оплата доставки</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <div className='flex w-[500px] gap-6 p-4'>
          <Button
            className='w-full'
            colour='secondary'
            variant='outline'
            onClick={() => paymentMethod.functions.goBack()}
          >
            Назад
          </Button>
          <Button
            className='w-full'
            colour='primary'
            variant='contained'
            onClick={() => {
              paymentMethod.functions.goToCheckIn();
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
