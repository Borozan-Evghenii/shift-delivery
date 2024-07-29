import * as TabPrimitive from '@radix-ui/react-tabs';
import React from 'react';

import { cn } from '@/utils/helper/clasnames';

const TabRoot = TabPrimitive.Root;
const TabContent = TabPrimitive.Content;

const TabList = React.forwardRef<
  React.ComponentRef<typeof TabPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <TabPrimitive.List
    ref={ref}
    className={cn('flex min-w-80 rounded-2xl bg-secondary p-0.5', className)}
    {...props}
  >
    {children}
  </TabPrimitive.List>
));

const TabTrigger = React.forwardRef<
  React.ComponentRef<typeof TabPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabPrimitive.Trigger
    ref={ref}
    className={cn(
      'w-full rounded-14 bg-transparent px-4 py-2.5 text-sm text-tertiary',
      'data-[state=active]:bg-primary data-[state=active]:text-primary',
      className
    )}
    {...props}
  >
    {children}
  </TabPrimitive.Trigger>
));

export const Tab = {
  Root: TabRoot,
  List: TabList,
  Content: TabContent,
  Trigger: TabTrigger
};
