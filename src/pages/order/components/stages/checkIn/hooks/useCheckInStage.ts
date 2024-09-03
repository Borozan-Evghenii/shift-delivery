import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

import { beautifyPrice } from '../../../../../../utils/helper/beutifyPrice/beutifyPrice';

export const useCheckInStage = () => {
  const createOrderForm = useCreateOrderFormContext();
  const stage = useStage();

  const receiverName = `${createOrderForm.getValues('receiver.firstname')} ${createOrderForm.getValues('receiver.middlename')} ${createOrderForm.getValues('receiver.lastname')}`;
  const senderName = `${createOrderForm.getValues('sender.firstname')} ${createOrderForm.getValues('sender.middlename')} ${createOrderForm.getValues('sender.lastname')}`;
  const receiverPhone = `${createOrderForm.getValues('receiver.phone')}`;
  const senderPhone = `${createOrderForm.getValues('sender.phone')} `;
  const senderComment = `${createOrderForm.getValues('senderPoint.comment')} `;
  const price = `${beautifyPrice(createOrderForm.getValues('option.price'))} `;
  const deliveryType = `${createOrderForm.getValues('option.type')} `;
  const deliveryTime = `${createOrderForm.getValues('option.days')} `;
  const receiverComment = `${createOrderForm.getValues('receiverPoint.comment')} `;
  const senderAdress = `ул. ${createOrderForm.getValues('senderPoint.street')} д. ${createOrderForm.getValues('senderPoint.house')}`;
  const receiverAdress = `ул. ${createOrderForm.getValues('receiverPoint.street')} д. ${createOrderForm.getValues('receiverPoint.house')}`;

  const goBack = () => {
    stage.setStage('sender');
  };

  const goSender = () => {
    stage.setStage('sender');
  };
  const goReceiver = () => {
    stage.setStage('receiver');
  };
  const goSenderPoint = () => {
    stage.setStage('sendPoint');
  };
  const goReceiverPoint = () => {
    stage.setStage('receivPoint');
  };

  return {
    state: {
      receiverAdress,
      receiverComment,
      receiverName,
      receiverPhone,
      senderName,
      senderPhone,
      senderComment,
      price,
      deliveryType,
      deliveryTime,
      senderAdress
    },
    functions: { goBack, goReceiver, goSender, goSenderPoint, goReceiverPoint }
  };
};
