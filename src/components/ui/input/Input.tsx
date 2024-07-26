import React from 'react';

import { cn } from '@/utils/helper/clasnames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  error?: boolean;
}

export const INPUT_TEST_ID = {
  CONTAINER: 'input-container',
  LABEL: 'input-label',
  INPUT: 'input',
  HELP_TEXT: 'input-help-text'
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, type, className, ...props }: InputProps, ref) => {
    const id = React.useId();

    return (
      <div className='flex w-full flex-col' data-testid={INPUT_TEST_ID.CONTAINER}>
        {label && (
          <label className='mb-1.5 text-sm' data-testid={INPUT_TEST_ID.LABEL} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          data-testid={INPUT_TEST_ID.INPUT}
          {...props}
          id={id}
          className={cn([
            'w-full rounded-lg border border-light p-3 text-base text-primary',
            'placeholder:text-tertiary',
            'hover:border-medium',
            'disabled:cursor-not-allowed disabled:border-light disabled:bg-disabled',
            !error &&
              'focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-indicator-focused',
            error && 'outline outline-2 outline-indicator-error',
            className
          ])}
        />
        {helpText && (
          <p
            className={cn(['p-1 text-sm text-tertiary', error && 'text-error'])}
            data-testid={INPUT_TEST_ID.HELP_TEXT}
          >
            {helpText}
          </p>
        )}
      </div>
    );
  }
);
