import { useCreateOrderFormContext } from '@/pages/order/context/form/useCreateOrderFormContext';
import { useStage } from '@/pages/order/context/stage';

import { beautifyPrice } from '../../../../../../utils/helper/beutifyPrice/beutifyPrice';

export const useCheckInStage = () => {
  const createOrderForm = useCreateOrderFormContext();
  const stage = useStage();

  const order = {
    delivery: {
      type: `${createOrderForm.getValues('option.type')} `,
      time: `${createOrderForm.getValues('option.days')} `
    },
    price: `${beautifyPrice(createOrderForm.getValues('option.price'))} `,
    sender: {
      adress: `ул. ${createOrderForm.getValues('senderAddress.street')} д. ${createOrderForm.getValues('senderAddress.house')}`,
      comment: `${createOrderForm.getValues('senderAddress.comment')} `,
      phone: `${createOrderForm.getValues('sender.phone')} `,
      name: `${createOrderForm.getValues('sender.firstname')} ${createOrderForm.getValues('sender.middlename')} ${createOrderForm.getValues('sender.lastname')}`
    },
    receiver: {
      name: `${createOrderForm.getValues('receiver.firstname')} ${createOrderForm.getValues('receiver.middlename')} ${createOrderForm.getValues('receiver.lastname')}`,
      adress: `ул. ${createOrderForm.getValues('receiverAddress.street')} д. ${createOrderForm.getValues('receiverAddress.house')}`,
      comment: `${createOrderForm.getValues('receiverAddress.comment')} `,
      phone: `${createOrderForm.getValues('receiver.phone')}`
    }
  };

  const goBack = () => {
    stage.setStage('paymentMethod');
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
      order
    },
    functions: { goBack, goReceiver, goSender, goSenderPoint, goReceiverPoint }
  };
};
