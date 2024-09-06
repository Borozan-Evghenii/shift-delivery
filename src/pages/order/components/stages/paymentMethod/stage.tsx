import { PageLayout } from '@/components/layout';
import { Button, RadioGroup, Typography } from '@/components/ui';

import type { Payer } from '../../../../../../@types/models';

import { usePaymentMethodStage } from './hooks/usePaymentMethodStage';

export const PaymentMethod = () => {
  const paymentMethod = usePaymentMethodStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Оплата доставки</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <RadioGroup.Root
          className='flex flex-col gap-3'
          defaultValue='SENDER'
          onValueChange={(data) => {
            paymentMethod.state.createOrderForm.setValue('payer', data as Payer);
          }}
        >
          <RadioGroup.Item label='Получатель' value='RECEIVER' />
          <RadioGroup.Item label='Отправитель' value='SENDER' />
        </RadioGroup.Root>
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
