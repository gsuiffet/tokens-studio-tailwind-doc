import React, { FC } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/drawer';
import { Icon } from '@/components/ui/icon';

const Header: FC = () => {
  return (
    <header className="container h-14 sticky top-0 z-50 border-b bg-sd-background-default/95 backdrop-blur">
      <div className="flex justify-between items-center h-full w-full px-4 md:px-16">
        <div className="md:hidden">
          <Drawer />
        </div>
        <Logo classname="hidden md:flex" />
        <div className="flex items-center">
          <nav className="hidden md:flex mr-5" role="navigation" aria-label="Main Navigation">
            <Link href="/introduction" className="ml-5 main-navigation-full">
              documentation
            </Link>
            <Link href="/primitives" className="ml-5 main-navigation-full">
              examples
            </Link>
          </nav>
          <ModeToggle />
          <Link
            href="https://github.com/gsuiffet/tokens-studio-tailwind"
            target="_blank"
            className="ml-5 flex items-center"
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
