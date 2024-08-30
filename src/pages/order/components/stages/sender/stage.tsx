import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useSenderStage } from './hooks/useSenderStage';

export const Sender = () => {
  const sender = useSenderStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Отправитель</Typography>
      <div className='flex w-[500px] flex-col gap-6'>
        <Input
          autoComplete='off'
          label='Фамилия'
          placeholder='Фамилия'
          {...sender.state.createOrderForm.register('sender.firstname')}
          error={!!sender.state.createOrderForm.formState.errors.sender?.firstname}
          helpText={sender.state.createOrderForm.formState.errors?.sender?.firstname?.message}
        />
        <Input
          autoComplete='off'
          label='Имя'
          placeholder='Имя'
          {...sender.state.createOrderForm.register('sender.lastname')}
          error={!!sender.state.createOrderForm.formState.errors.sender?.lastname}
          helpText={sender.state.createOrderForm.formState.errors?.sender?.lastname?.message}
        />
        <Input
          autoComplete='off'
          label='Отчество'
          placeholder='Отчество (при наличии)'
          {...sender.state.createOrderForm.register('sender.middlename')}
          error={!!sender.state.createOrderForm.formState.errors.sender?.middlename}
          helpText={sender.state.createOrderForm.formState.errors?.sender?.middlename?.message}
        />
        <Input
          autoComplete='off'
          label='Номер телефона'
          placeholder='Телефон'
          {...sender.state.createOrderForm.register('sender.phone')}
          error={!!sender.state.createOrderForm.formState.errors.sender?.phone}
          helpText={sender.state.createOrderForm.formState.errors?.sender?.phone?.message}
        />
      </div>
      <div className='flex w-[500px] gap-6 p-4'>
        <Button
          className='w-full'
          colour='secondary'
          variant='outline'
          onClick={() => sender.functions.goBack()}
        >
          Назад
        </Button>
        <Button
          className='w-full'
          colour='primary'
          disabled={!sender.state.isStageValid()}
          variant='contained'
          onClick={() => sender.functions.goToSenderPoint()}
        >
          Продолжить
        </Button>
      </div>
    </PageLayout>
  );
};
