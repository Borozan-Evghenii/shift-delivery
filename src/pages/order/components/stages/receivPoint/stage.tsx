import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useReceiverPointStage } from './hooks/useReceiverPointStage';

export const ReceivPoint = () => {
  const receivPoint = useReceiverPointStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Куда доставить</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          label='Улица'
          placeholder='Улица'
          {...receivPoint.state.createOrderForm.register('receiverPoint.street')}
          error={!!receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.street}
          helpText={
            receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.street?.message
          }
        />
        <Input
          label='Номер дома'
          placeholder='Дом'
          {...receivPoint.state.createOrderForm.register('receiverPoint.house')}
          error={!!receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.house}
          helpText={
            receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.house?.message
          }
        />
        <Input
          label='Номер квартиры'
          placeholder='Квартира'
          {...receivPoint.state.createOrderForm.register('receiverPoint.apartament')}
          error={!!receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.apartament}
          helpText={
            receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.apartament?.message
          }
        />
        <Input
          label='Заметка'
          placeholder='Заметка для курьера'
          {...receivPoint.state.createOrderForm.register('receiverPoint.comment')}
          error={!!receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.comment}
          helpText={
            receivPoint.state.createOrderForm.formState.errors?.receiverPoint?.comment?.message
          }
        />
        <div className='flex w-[500px] gap-6 p-4'>
          <Button
            className='w-full'
            colour='secondary'
            variant='outline'
            onClick={() => receivPoint.functions.goBack()}
          >
            Назад
          </Button>
          <Button
            className='w-full'
            colour='primary'
            disabled={!receivPoint.state.isStageValid()}
            variant='contained'
            onClick={() => {
              receivPoint.functions.goToPaymentMethod();
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
