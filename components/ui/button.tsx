import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-sd-background-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sd-ring-default focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-sd-primary-default text-sd-primary-foreground shadow-md hover:bg-sd-primary-default/90',
        destructive:
          'bg-sd-destructive-default text-sd-destructive-foreground hover:bg-sd-destructive-default/90',
        outline:
          'border border-sd-input-default bg-sd-background-default hover:bg-sd-secondary-default hover:text-sd-secondary-foreground',
        secondary:
          'bg-sd-secondary-default text-sd-secondary-foreground hover:bg-sd-secondary-default/80',
        ghost: 'shadow-none hover:bg-sd-secondary-default hover:text-sd-secondary-foreground',
        link: 'text-sd-primary-default underline-offset-4 shadow-none hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
