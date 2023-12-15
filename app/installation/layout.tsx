'use client';
import React, { ReactNode, useEffect } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const paths = [
  {
    title: 'Tokens Studio',
    path: '/installation',
  },
  {
    title: 'Tokens Studio Tailwind',
    path: '/installation/tokens-studio-tailwind',
  },
];

export default function InstallationLayout({ children }: { children: ReactNode }) {
  const selectedPath = usePathname();
  const router = useRouter();

  const isSelected = (pathname: string) => {
    return selectedPath === pathname;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPath]);

  return (
    <>
      <div className="md:flex fixed bg-sd-background-default/95 backdrop-blur h-16 md:h-24 right-0 left-0 md:right-auto md:left-auto mx-6 md:-ml-px md:mr-0 z-50 md:w-full">
        <div className="flex w-full h-full items-center space-x-1 md:px-4">
          {paths.map(({ title, path }) => (
            <Menubar className="w-1/2 md:w-fit" key={title}>
              <MenubarMenu>
                <MenubarTrigger
                  onClick={() => router.push(path)}
                  data-state={isSelected(path) ? 'open' : 'unchecked'}
                  className="w-full whitespace-nowrap cursor-pointer text-xs md:text-sm justify-center"
                >
                  {title}
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          ))}
        </div>
      </div>
      <PageHeader
        title="Installation"
        description={
          <>
            Streamline your workflow by synchronizing your design tokens with your repository.{' '}
            <strong>Tokens Studio Tailwind</strong> will then generate all the corresponding
            variables and components.
          </>
        }
        className="pt-20 md:pt-24"
      />
      {children}
    </>
  );
}
