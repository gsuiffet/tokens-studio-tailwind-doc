import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center rounded-default transition-colors', {
  variants: {
    variant: {
      default:
        'shadow-sd-shadow-default bg-sd-primary-default text-sd-primary-foreground hover:bg-sd-primary-default/90',
      outline:
        'border-outline bg-sd-background-default text-sd-primary-default hover:bg-sd-secondary-default',
      ghost: 'hover:bg-sd-secondary-default hover:text-sd-secondary-foreground',
      link: 'text-sd-primary-default underline',
    },
    size: {
      default: 'h-sd-sizing-xl spacing-default',
      icon: 'h-sd-sizing-xl w-sd-sizing-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

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
