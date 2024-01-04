import React, { FC } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/drawer';
import { Icon } from '@/components/ui/icon';

const Header: FC = () => {
  return (
    <header className="container h-sd-sizing-3-xl sticky top-0 z-50 border-b bg-sd-background-default/95 backdrop-blur">
      <div className="flex justify-between items-center h-full w-full px-sd-sizing-sm md:px-sd-sizing-4-xl">
        <div className="md:hidden">
          <Drawer />
        </div>
        <Logo classname="hidden md:flex mr-sd-sizing-xl" />
        <div className="flex items-center gap-sd-sizing-sm">
          <nav
            className="menu-main text-sd-primary-default hidden md:flex gap-sd-sizing-sm"
            role="navigation"
            aria-label="Main Navigation"
          >
            <Link href="/introduction" className="hover:underline">
              documentation
            </Link>
            <Link href="/primitives" className="hover:underline">
              examples
            </Link>
          </nav>
          <ModeToggle />
          <Link
            href="https://github.com/gsuiffet/tokens-studio-tailwind"
            target="_blank"
            className="flex items-center"
          >
            <Button variant="outline" size="icon">
              <Icon name="github" size="large" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
