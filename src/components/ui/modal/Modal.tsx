import React from 'react';
import { createPortal } from 'react-dom';

import { IconClose } from '@/components/icons/svg';

import { Button } from '../button/Button';

export const MODAL_TEST_IDS = {
  CONTAINER: 'modal-container',
  CLOSE_BUTOTN: 'close-button',
  BACK_LAYOUT: 'modal-back-layout',
  CONTETN: 'modal-content',
  MODAL: 'modal'
};

interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  onClose?: () => void;
  open: boolean;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ children, open, onClose, ...props }, ref) => (
    <div data-testid={MODAL_TEST_IDS.MODAL}>
      {open &&
        createPortal(
          <>
            <div
              className='modal absolute left-0 top-0 flex h-[100vh] w-full items-center justify-center bg-[#141C24] opacity-30'
              data-testid={MODAL_TEST_IDS.BACK_LAYOUT}
              role='alertdialog'
              onClick={onClose}
            />
            <div
              ref={ref}
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white'
              {...props}
              aria-describedby='dialog_desc'
              aria-hidden={!open}
              aria-labelledby='dialog_label'
              aria-modal={open}
              data-testid={MODAL_TEST_IDS.CONTAINER}
              role='alertdialog'
            >
              <div className='flex justify-end px-4 py-6'>
                <Button
                  autoFocus
                  data-testid={MODAL_TEST_IDS.CLOSE_BUTOTN}
                  variant='text'
                  onClick={onClose}
                >
                  <IconClose className='cursor-pointer' />
                </Button>
              </div>
              {children && (
                <div
                  className='flex items-center justify-center px-[72px] pb-[72px]'
                  data-testid={MODAL_TEST_IDS.CONTETN}
                >
                  {children}
                </div>
              )}
            </div>
          </>,
          document.body
        )}
    </div>
  )
);
