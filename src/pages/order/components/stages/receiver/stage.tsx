import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useReceiverStage } from './hooks/useReceiverStage';

export const Receiver = () => {
  const { state, functions } = useReceiverStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Получатель</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          autoComplete='off'
          label='Фамилия'
          placeholder='Фамилия'
          {...state.createOrderForm.register('receiver.firstname')}
          error={!!state.createOrderForm.formState.errors.receiver?.firstname}
          helpText={state.createOrderForm.formState.errors?.receiver?.firstname?.message}
        />
        <Input
          autoComplete='off'
          label='Имя'
          placeholder='Имя'
          {...state.createOrderForm.register('receiver.lastname')}
          error={!!state.createOrderForm.formState.errors?.receiver?.lastname}
          helpText={state.createOrderForm.formState.errors?.receiver?.lastname?.message}
        />
        <Input
          autoComplete='off'
          label='Отчество'
          placeholder='Отчество (при наличии)'
          {...state.createOrderForm.register('receiver.middlename')}
          error={!!state.createOrderForm.formState.errors?.receiver?.middlename}
          helpText={state.createOrderForm.formState.errors?.receiver?.middlename?.message}
        />
        <Input
          autoComplete='off'
          label='Номер телефона'
          placeholder='Телефон'
          {...state.createOrderForm.register('receiver.phone')}
          error={!!state.createOrderForm.formState.errors?.receiver?.phone}
          helpText={state.createOrderForm.formState.errors?.receiver?.phone?.message}
        />
      </div>
      <div className='flex w-[500px] gap-6 p-4'>
        <Button
          className='w-full'
          colour='secondary'
          variant='outline'
          onClick={() => functions.goBack()}
        >
          Назад
        </Button>
        <Button
          className='w-full'
          colour='primary'
          disabled={!state.isStageValid()}
          variant='contained'
          onClick={() => {
            functions.goToSender();
          }}
        >
          Продолжить
        </Button>
      </div>
    </PageLayout>
  );
};
