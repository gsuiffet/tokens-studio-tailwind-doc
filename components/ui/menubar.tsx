'use client';

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/lib/utils';

const MenubarMenu = MenubarPrimitive.Menu;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'flex items-center spacing-gap-xxs rounded-default border-outline bg-sd-background-default p-1',
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'menu whitespace-nowrap cursor-pointer flex select-none items-center rounded-default spacing-default text-sd-primary-default outline-none hover:bg-sd-secondary-default hover:text-sd-primary-default data-[state=open]:bg-sd-secondary-default data-[state=open]:font-semibold',
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

export { Menubar, MenubarMenu, MenubarTrigger };
