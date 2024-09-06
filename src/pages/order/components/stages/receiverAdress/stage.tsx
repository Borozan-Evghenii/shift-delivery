import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useReceiverAdressStage } from './hooks/useReceiverAdressStage';

export const ReceiverAdress = () => {
  const receiverAddress = useReceiverAdressStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Куда доставить</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          label='Улица'
          placeholder='Улица'
          {...receiverAddress.state.createOrderForm.register('receiverAddress.street')}
          error={!!receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.street}
          helpText={
            receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.street?.message
          }
        />
        <Input
          label='Номер дома'
          placeholder='Дом'
          {...receiverAddress.state.createOrderForm.register('receiverAddress.house')}
          error={!!receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.house}
          helpText={
            receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.house?.message
          }
        />
        <Input
          label='Номер квартиры'
          placeholder='Квартира'
          {...receiverAddress.state.createOrderForm.register('receiverAddress.apartment')}
          error={
            !!receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.apartment
          }
          helpText={
            receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.apartment
              ?.message
          }
        />
        <Input
          label='Заметка'
          placeholder='Заметка для курьера'
          {...receiverAddress.state.createOrderForm.register('receiverAddress.comment')}
          error={!!receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.comment}
          helpText={
            receiverAddress.state.createOrderForm.formState.errors?.receiverAddress?.comment
              ?.message
          }
        />
        <div className='flex w-[500px] gap-6 p-4'>
          <Button
            className='w-full'
            colour='secondary'
            variant='outline'
            onClick={() => receiverAddress.functions.goBack()}
          >
            Назад
          </Button>
          <Button
            className='w-full'
            colour='primary'
            disabled={!receiverAddress.state.isStageValid()}
            variant='contained'
            onClick={() => {
              receiverAddress.functions.goToPaymentMethod();
            }}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
