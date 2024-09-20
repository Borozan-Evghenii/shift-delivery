import { PageLayout } from '@/components/layout';
import { Button, Card, Typography } from '@/components/ui';

import { useOrderByIdPage } from './hooks/userOrderById';

export const OrderById = () => {
  const { state, functions } = useOrderByIdPage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Детали</Typography>
      <div className='flex w-full flex-col gap-6'>
        <Card>
          <div className='flex w-full flex-col gap-6'>
            <Typography>Получатель</Typography>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                ФИО
              </Typography>
              <Typography>{state.orderData.receiver.name}</Typography>
            </div>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                Телефон
              </Typography>
              <Typography>{state.orderData.receiver.phone}</Typography>
            </div>
          </div>
        </Card>
        <Card>
          <div className='flex w-full flex-col gap-6'>
            <Typography>Отправитель</Typography>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                ФИО
              </Typography>
              <Typography>{state.orderData.sender.name}</Typography>
            </div>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                Телефон
              </Typography>
              <Typography>{state.orderData.sender.phone}</Typography>
            </div>
          </div>
        </Card>
        <Card>
          <div className='flex w-full flex-col gap-6'>
            <Typography>Откуда забрать</Typography>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                Адрес
              </Typography>
              <Typography>{state.orderData.senderAdress.adress}</Typography>
            </div>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                Заметка
              </Typography>
              <Typography>{state.orderData.senderAdress.notice}</Typography>
            </div>
          </div>
        </Card>
        <Card>
          <div className='flex w-full flex-col gap-6'>
            <Typography>Куда доставить</Typography>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                Адрес
              </Typography>
              <Typography>{state.orderData.receiverAdress.adress}</Typography>
            </div>
            <div className='flex flex-col'>
              <Typography className='text-tertiary' variant='paragraph-12'>
                Заметка
              </Typography>
              <Typography>{state.orderData.receiverAdress.notice}</Typography>
            </div>
          </div>
        </Card>
        <div className='flex w-full justify-between'>
          <Button
            colour='secondary'
            disabled={!state.orderData.cancelable}
            variant='outline'
            onClick={functions.cancelOrder}
          >
            Отменить доставку
          </Button>
          <Button onClick={functions.closePage}>Закрыть</Button>
        </div>
      </div>
    </PageLayout>
  );
};
