import succes from '@/assets/images/success.png';
import { Button, Modal, Typography } from '@/components/ui';

import type { Stage } from '../../context/stage';
import { CheckIn, PaymentMethod, Receiver, ReceiverAdress, Sender, SenderAdress } from '../stages';
import { DeliveryMethod } from '../stages/deliveryMethod/stage';

import { useStageContainer } from './hook/useStageContainer';

const component: Record<Stage, React.ReactNode> = {
  deliveryMethod: <DeliveryMethod />,
  sender: <Sender />,
  receiver: <Receiver />,
  sendPoint: <SenderAdress />,
  receivPoint: <ReceiverAdress />,
  paymentMethod: <PaymentMethod />,
  CheckIn: <CheckIn />
};

export const StageContainer = () => {
  const { state, functions } = useStageContainer();

  return (
    <>
      <Modal open={state.modal.open} onClose={() => state.modal.setOpen(false)}>
        <div className='flex max-w-[400px] flex-col items-center gap-10 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <img alt='succes' className='h-[60px] w-[60px]' src={succes} />
            <Typography variant='title-h3'> Заявка отправлена</Typography>
            <Typography variant='paragraph-16'>
              Вы можете оплатить ваш заказ в разделе «Профиль»
            </Typography>
          </div>

          <Button>Посмотреть статус</Button>
        </div>
      </Modal>

      <form className='w-full' onSubmit={state.createOrderForm.handleSubmit(functions.onSubmit)}>
        {component[state.stage]}
      </form>
    </>
  );
};
