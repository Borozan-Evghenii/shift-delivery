import { clsx } from 'clsx';
import React from 'react';

import styles from './Button.module.css';

type PrimaryVariants = 'contained' | 'text' | 'link';
type SecondaryVariants = 'outlined' | 'text' | 'link';
type TertiaryVariants = 'link';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

type ButtonVariant<T extends ButtonType> = T extends 'primary'
  ? PrimaryVariants
  : T extends 'secondary'
    ? SecondaryVariants
    : T extends 'tertiary'
      ? TertiaryVariants
      : never;

interface ButtonProps<T extends ButtonType> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Start Icon
   * */
  startIcon?: React.ReactNode;
  /**
   * End Icon
   * */
  endIcon?: React.ReactNode;
  /**
   * Label
   * */
  children: React.ReactNode | string;
  buttonType: T;
  variant: ButtonVariant<T>;
}

// interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   startIcon?: React.ReactNode;
//   endIcon?: React.ReactNode;
//   children: React.ReactNode | string;
// }

// type ButtonProps = CommonButtonProps &
//   (
//     | { buttonType: 'primary'; variant: PrimaryVariants }
//     | { buttonType: 'secondary'; variant: SecondaryVariants }
//     | { buttonType: 'tertiary'; variant: TertiaryVariants }
//   );

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
//   { startIcon, endIcon, buttonType, children = 'Button', variant, ...props },
//   ref: React.Ref<HTMLButtonElement>
// ) => (
//   <button className={clsx(styles.button, styles[`${buttonType}-${variant}`])} {...props} ref={ref}>
//     {startIcon}
//     <span>{children}</span>
//     {endIcon}
//   </button>
// ))

const InitialButton = <T extends ButtonType>(
  { startIcon, endIcon, buttonType, children = 'Button', variant, ...props }: ButtonProps<T>,
  ref: React.Ref<HTMLButtonElement>
) => (
  <button className={clsx(styles.button, styles[`${buttonType}-${variant}`])} {...props} ref={ref}>
    {startIcon}
    <span>{children}</span>
    {endIcon}
  </button>
);

export const Button = React.forwardRef(InitialButton);
