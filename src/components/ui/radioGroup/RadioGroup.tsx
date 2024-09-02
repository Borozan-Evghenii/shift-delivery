import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import React from 'react';

import { IconConfirm } from '@/components/icons/svg';
import { cn } from '@/utils/helper/clasnames';

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupProps
>(({ className, value, label }, ref) => {
  const id = React.useId();
  return (
    <div className='flex items-center gap-3'>
      <RadioGroupPrimitive.Item
        ref={ref}
        id={id}
        value={value}
        className={cn(
          'flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1.5px] border-light bg-transparent',
          'data-[state=checked]:border-indicator-focused data-[state=checked]:bg-brand data-[state=checked]:text-white',
          'data-[state=disabled]:cursor-not-allowed',
          className
        )}
      >
        <RadioGroupPrimitive.Indicator>
          <IconConfirm />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label className='paragraph-16-medium cursor-pointer' htmlFor={id}>
        {label}
      </label>
    </div>
  );
});

export const RadioGroup = {
  Root: RadioGroupPrimitive.Root,
  Item: RadioGroupItem
};
