'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon, IconName } from '@/components/ui/icon';

const themes: { name: string; icon: IconName }[] = [
  {
    name: 'light',
    icon: 'sun',
  },
  {
    name: 'dark',
    icon: 'moon',
  },
  {
    name: 'system',
    icon: 'monitor',
  },
];

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex items-center">
        <Button variant="outline" size="icon">
          <Icon
            name="sun"
            size="large"
            classNameContainer="absolute scale-100 transition-all dark:scale-0"
          />
          <Icon
            name="moon"
            size="large"
            classNameContainer="absolute scale-0 transition-all dark:scale-100 dark:rotate-0"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1 font-medium">
        {themes.map(({ name, icon }) => (
          <DropdownMenuItem
            key={name}
            onClick={() => setTheme(name)}
            className={`flex space-x-2 items-center p-0 ${
              theme === name ? 'bg-sd-secondary-default' : 'bg-sd-background-default'
            } `}
          >
            <Icon name={icon} />
            <p className="capitalize">{name}</p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
