import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useReceiverStage } from './hooks/useReceiverStage';

export const Receiver = () => {
  const receiver = useReceiverStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Получатель</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          autoComplete='off'
          label='Фамилия'
          placeholder='Фамилия'
          {...receiver.state.createOrderForm.register('receiver.firstname')}
          error={!!receiver.state.createOrderForm.formState.errors.receiver?.firstname}
          helpText={receiver.state.createOrderForm.formState.errors?.receiver?.firstname?.message}
        />
        <Input
          autoComplete='off'
          label='Имя'
          placeholder='Имя'
          {...receiver.state.createOrderForm.register('receiver.lastname')}
          error={!!receiver.state.createOrderForm.formState.errors?.receiver?.lastname}
          helpText={receiver.state.createOrderForm.formState.errors?.receiver?.lastname?.message}
        />
        <Input
          autoComplete='off'
          label='Отчество'
          placeholder='Отчество (при наличии)'
          {...receiver.state.createOrderForm.register('receiver.middlename')}
          error={!!receiver.state.createOrderForm.formState.errors?.receiver?.middlename}
          helpText={receiver.state.createOrderForm.formState.errors?.receiver?.middlename?.message}
        />
        <Input
          autoComplete='off'
          label='Номер телефона'
          placeholder='Телефон'
          {...receiver.state.createOrderForm.register('receiver.phone')}
          error={!!receiver.state.createOrderForm.formState.errors?.receiver?.phone}
          helpText={receiver.state.createOrderForm.formState.errors?.receiver?.phone?.message}
        />
      </div>
      <div className='flex w-[500px] gap-6 p-4'>
        <Button
          className='w-full'
          colour='secondary'
          variant='outline'
          onClick={() => receiver.functions.goBack()}
        >
          Назад
        </Button>
        <Button
          className='w-full'
          colour='primary'
          variant='contained'
          onClick={() => {
            receiver.functions.goToSender();
          }}
        >
          Продолжить
        </Button>
      </div>
    </PageLayout>
  );
};
