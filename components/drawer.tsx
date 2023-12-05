'use client';
import React, { FC, useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { Menu } from '@/components/menu';
import { Icon } from '@/components/icon';

const Drawer: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className="flex items-center">
        <Icon name="menu" size="large" handleClick={() => setIsSheetOpen(true)} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="h-14">
            <Logo classname="flex p-2" />
          </SheetTitle>
          <Menu handleClick={() => setIsSheetOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { Drawer };
