import * as ToastPrimitive from '@radix-ui/react-toast';
import React from 'react';

import { IconClose } from '@/components/icons/svg';

type PublishMethodProps = { title: string; description: string; link?: string };

export interface ToastRefProps extends React.ComponentPropsWithRef<typeof ToastPrimitive.Root> {
  publish: (props: PublishMethodProps) => void;
}

export const ToastItem = React.forwardRef<
  ToastRefProps,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(({ children, ...toastProps }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState<PublishMethodProps>({
    title: '',
    description: '',
    link: ''
  });

  React.useImperativeHandle(ref, () => ({
    publish: (props: PublishMethodProps) => {
      setOpen(true);
      setContent({ ...props });
    }
  }));

  return (
    <ToastPrimitive.Root
      className='data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut flex flex-col gap-4 rounded-2xl border bg-white p-4'
      open={open}
      onOpenChange={setOpen}
      {...toastProps}
    >
      <div className='flex justify-between'>
        <ToastPrimitive.Title asChild>
          <p className='paragraph-16-medium'>{content.title}</p>
        </ToastPrimitive.Title>
        <ToastPrimitive.Close>
          <IconClose />
        </ToastPrimitive.Close>
      </div>

      <ToastPrimitive.Description>
        <p className='paragraph-14'>{content.description}</p>
        <a href={content.link} rel='noreferrer' target='_blank'>
          {content.link}
        </a>
      </ToastPrimitive.Description>
    </ToastPrimitive.Root>
  );
});

export const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ children, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className='fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]'
    {...props}
  />
));

export const Toast = {
  Item: ToastItem,
  Provider: ToastPrimitive.Provider,
  Viewport: ToastViewport
};
