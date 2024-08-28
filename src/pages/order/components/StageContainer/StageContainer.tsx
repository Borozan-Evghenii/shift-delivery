import type { Stage } from '../../context/stage';
import { useStage } from '../../context/stage';
import { useOrderPage } from '../../hooks/useOrderPage';
import { CheckIn, PaymentMethod, Receiver, ReceivPoint, Sender, SendPoint } from '../stages';
import { DeliveryMethod } from '../stages/deliveryMethod/stage';

const component: Record<Stage, React.ReactNode> = {
  deliveryMethod: <DeliveryMethod />,
  sender: <Sender />,
  receiver: <Receiver />,
  sendPoint: <SendPoint />,
  receivPoint: <ReceivPoint />,
  paymentMethod: <PaymentMethod />,
  CheckIn: <CheckIn />
};

export const StageContainer = () => {
  const { stage } = useStage();
  const orderPage = useOrderPage();

  return (
    <form
      className='w-full'
      onSubmit={orderPage.state.form.createOrderForm.handleSubmit(orderPage.functions.onSubmit)}
    >
      {component[stage]}
    </form>
  );
};
