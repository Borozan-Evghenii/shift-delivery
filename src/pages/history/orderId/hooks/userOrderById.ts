import { useNavigate, useParams } from '@tanstack/react-router';

import { useCancelDeliveryOrderByIdMutation, useGetDeliveryOrderByIdQuery } from '@/utils/api';
import { ROUTE } from '@/utils/constants';

export const useOrderByIdPage = () => {
  const { id } = useParams({ from: ROUTE.HISTORY_ORDER_ID });
  const order = useGetDeliveryOrderByIdQuery({ id });
  const cancel = useCancelDeliveryOrderByIdMutation();
  const navigate = useNavigate();

  const orderData = {
    receiver: {
      name: `${order.data?.data.order.receiver.firstname} ${order.data?.data.order.receiver.lastname}`,
      phone: order.data?.data.order.receiver.phone
    },
    sender: {
      name: `${order.data?.data.order.sender.firstname}  ${order.data?.data.order.sender.lastname}`,
      phone: order.data?.data.order.sender.phone
    },
    receiverAdress: {
      adress: `ул. ${order.data?.data.order.receiverAddress.street}, д. ${order.data?.data.order.receiverAddress.house}`,
      notice: order.data?.data.order.receiverAddress.comment
    },
    senderAdress: {
      adress: `ул. ${order.data?.data.order.senderAddress.street}, д. ${order.data?.data.order.senderAddress.house}`,
      notice: order.data?.data.order.senderAddress.comment
    },
    cancelable: order.data?.data.order.cancellable
  };

  const cancelOrder = () => cancel.mutate({ params: { orderId: id } });

  const closePage = () =>
    navigate({
      to: ROUTE.HISTORY,
      params: {
        id: ''
      }
    });

  return { state: { orderData }, functions: { cancelOrder, closePage } };
};
