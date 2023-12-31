'use client';
import React, { FC, useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/ui/logo';
import { Menu } from '@/components/menu';
import { Icon } from '@/components/ui/icon';

const Drawer: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className="flex items-center">
        <Icon name="menu" size="large" handleClick={() => setIsSheetOpen(true)} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo classname="flex p-sd-sizing-xs" />
          </SheetTitle>
          <Menu handleClick={() => setIsSheetOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { Drawer };
