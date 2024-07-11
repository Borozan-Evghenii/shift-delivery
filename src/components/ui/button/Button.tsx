import { clsx } from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.HTMLAttributes<'button'> {
  type?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'outlined' | 'text' | 'link';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ startIcon, endIcon, children, variant = 'contained', ...props }, ref) => (
    <button className={clsx(styles.button, styles[variant])} {...props} ref={ref}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
);
