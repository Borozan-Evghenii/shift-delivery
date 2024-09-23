import { useNavigate, useParams } from '@tanstack/react-router';
import { useRef } from 'react';

import type { ToastRefProps } from '@/components/ui';
import { useCancelDeliveryOrderByIdMutation, useGetDeliveryOrderByIdQuery } from '@/utils/api';
import { ROUTE } from '@/utils/constants';

export const useOrderByIdPage = () => {
  const { id } = useParams({ from: ROUTE.HISTORY_ORDER_ID });
  const order = useGetDeliveryOrderByIdQuery({ id });
  const cancel = useCancelDeliveryOrderByIdMutation();
  const navigate = useNavigate();
  const toast = useRef<ToastRefProps>(null);

  if (order.isError) {
    toast.current?.publish({
      title: 'Order not found ',
      description: `Order is not found in database `
    });
  }

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

  const cancelOrder = () =>
    cancel.mutate(
      { params: { orderId: id } },
      {
        onSuccess: () => {
          toast.current?.publish({
            title: `Order ${id} is canceled `,
            description: `Order canceled `
          });
          navigate({
            to: ROUTE.HISTORY
          }).catch(() => {});
        },
        onError: () => {
          toast.current?.publish({
            title: `Order can't be canceled `,
            description: `Order can't be canceled `
          });
        }
      }
    );

  const closePage = () =>
    navigate({
      to: ROUTE.HISTORY
    });

  return { state: { orderData, toast }, functions: { cancelOrder, closePage } };
};
