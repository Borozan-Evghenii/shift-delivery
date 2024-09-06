import { IconEdit } from '@/components/icons/svg';
import { PageLayout } from '@/components/layout';
import { Button, Card, Typography } from '@/components/ui';

import { useCheckInStage } from './hooks/useCheckInStage';

export const CheckIn = () => {
  const checkIn = useCheckInStage();

  return (
    <PageLayout>
      <Typography variant='title-h2'>Проверка данных заказа</Typography>
      <div className='flex w-full flex-col gap-6 pb-8'>
        <Card variant='filled'>
          <div className='flex w-full flex-col gap-4'>
            <div className='flex items-center justify-start gap-4'>
              <Typography variant='paragraph-16-medium'>Получатель</Typography>
              <Button variant='text' onClick={checkIn.functions.goReceiver}>
                <IconEdit />
              </Button>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  ФИО
                </Typography>

                <Typography variant='paragraph-16'>{checkIn.state.receiverName}</Typography>
              </div>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  Телефон
                </Typography>
                <Typography variant='paragraph-16'>{checkIn.state.receiverPhone}</Typography>
              </div>
            </div>
          </div>
        </Card>
        <Card variant='filled'>
          <div className='flex w-full flex-col gap-4'>
            <div className='flex items-center justify-start gap-4'>
              <Typography variant='paragraph-16-medium'>Отправитель</Typography>
              <Button variant='text' onClick={checkIn.functions.goSender}>
                <IconEdit />
              </Button>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  ФИО
                </Typography>
                <Typography variant='paragraph-16'>{checkIn.state.senderName}</Typography>
              </div>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  Телефон
                </Typography>
                <Typography variant='paragraph-16'>{checkIn.state.senderPhone}</Typography>
              </div>
            </div>
          </div>
        </Card>
        <Card variant='filled'>
          <div className='flex w-full flex-col gap-4'>
            <div className='flex items-center justify-start gap-4'>
              <Typography variant='paragraph-16-medium'>Откуда забрать</Typography>
              <Button variant='text' onClick={checkIn.functions.goSenderPoint}>
                <IconEdit />
              </Button>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  Адрес
                </Typography>
                <Typography variant='paragraph-16'>{checkIn.state.senderAdress}</Typography>
              </div>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  Заметка
                </Typography>
                <Typography variant='paragraph-16'>{checkIn.state.senderComment}</Typography>
              </div>
            </div>
          </div>
        </Card>
        <Card variant='filled'>
          <div className='flex w-full flex-col gap-4'>
            <div className='flex items-center justify-start gap-4'>
              <Typography variant='paragraph-16-medium'>Куда доставить</Typography>
              <Button variant='text' onClick={checkIn.functions.goReceiverPoint}>
                <IconEdit />
              </Button>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  Адрес
                </Typography>
                <Typography variant='paragraph-16'>{checkIn.state.receiverAdress}</Typography>
              </div>
              <div className='flex flex-col gap-0.5'>
                <Typography className='text-tertiary' variant='paragraph-12'>
                  Заметка
                </Typography>
                <Typography variant='paragraph-16'>{checkIn.state.receiverComment}</Typography>
              </div>
            </div>
          </div>
        </Card>
        <div className='flex flex-col items-end'>
          <Typography
            className='mb-4'
            variant='title-h3'
          >{`Итого: ${checkIn.state.price}₽`}</Typography>
          <Typography className='text-secondary' variant='paragraph-16'>
            {`Тариф: 
            ${
              checkIn.state.deliveryType === 'EXPRESS'
                ? 'Экспресс доставка до двери'
                : 'Обычная доставка'
            }`}
          </Typography>
          <Typography className='text-secondary' variant='paragraph-16'>
            {`Срок:
            ${
              +checkIn.state.deliveryTime > 1
                ? `${checkIn.state.deliveryTime} рабочих дней`
                : `${checkIn.state.deliveryTime} рабочий день`
            }`}
          </Typography>
        </div>
        <div className='flex w-full justify-between gap-6'>
          <Button
            className='w-full'
            colour='secondary'
            variant='outline'
            onClick={() => checkIn.functions.goBack()}
          >
            Назад
          </Button>
          <Button className='w-full' colour='primary' type='submit' variant='contained'>
            Отправить
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
