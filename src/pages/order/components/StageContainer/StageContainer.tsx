import type { Stage } from '../../context/stage';
import { useStage } from '../../context/stage';
import { CheckIn, PaymentMethod, Receiver, ReceivPoint, Sender, SendPoint } from '../stages';
import { DeliveryMethod } from '../stages/deliveryMethod/DeliveryMethod';

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
  return component[stage];
};
