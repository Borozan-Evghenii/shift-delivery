import * as SelectPrimitive from '@radix-ui/react-select';
import React from 'react';

import { IconChevronDown } from '@/components/icons/svg';
import { cn } from '@/utils/helper/clasnames';

const SelectRoot = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectSeparator = SelectPrimitive.Separator;
const SelectValue = SelectPrimitive.Value;
const SelectIcon = SelectPrimitive.Icon;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, className }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'mt-1.5 flex h-10 w-full items-center justify-between whitespace-nowrap rounded-lg border border-light py-3 pl-3 pr-2 text-base text-secondary',
      'placeholder:text-tertiary',
      'hover:border-indicator-light hover:bg-secondary',
      'focus:outline-none',
      'disabled:bg-disabled',
      'data-[state=open]:border-indicator-light data-[state=open]:bg-secondary',
      '[&>span:nth-child(2)]:ml-2 [&>span:nth-child(2)]:w-full [&>span:nth-child(2)]:text-left',
      className
    )}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <IconChevronDown className='h-4 w-4 opacity-50' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithRef<typeof SelectPrimitive.Content>
>(({ children, className, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        'relative z-50 flex max-h-96 flex-col gap-1 overflow-hidden rounded-lg bg-primary px-1.5 py-2 shadow-md',
        className
      )}
      {...props}
      ref={ref}
      position={position}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'w-full',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height) w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item
    className={cn(
      'cursor-pointer justify-start rounded-lg px-1.5 py-3 text-secondary',
      'hover:bg-secondary',
      'focus:outline-none',
      className
    )}
    {...props}
    ref={ref}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

const SelectLabel = ({ children, className, ...props }: React.ComponentProps<'span'>) => (
  <span className={cn('paragraph-14-medium text-secondary', className)} {...props}>
    {children}
  </span>
);

export const Select = {
  Separator: SelectSeparator,
  Root: SelectRoot,
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Icon: SelectIcon,
  Label: SelectLabel
};
