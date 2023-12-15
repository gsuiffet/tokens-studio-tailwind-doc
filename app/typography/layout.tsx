'use client';
import React, { Fragment, ReactNode, useEffect } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const paths = [
  {
    title: 'Token',
    path: '/typography',
  },
  {
    title: 'Font Weight',
    path: '/typography/font-weight',
  },
  {
    title: 'Text case',
    path: '/typography/text-case',
  },
  {
    title: 'Text decoration',
    path: '/typography/text-decoration',
  },
];

export default function TypographyLayout({ children }: { children: ReactNode }) {
  // todo duplicate
  const selectedPath = usePathname();
  const router = useRouter();

  const isSelected = (pathname: string) => {
    return selectedPath === pathname;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPath]);

  const chunkPathOne = paths.slice(0, 2);
  const chunkPathTwo = paths.slice(2, 4);

  return (
    <>
      <div className="md:flex fixed bg-sd-background-default/95 backdrop-blur h-[6.75rem] md:h-24 right-0 left-0 md:right-auto md:left-auto mx-6 md:-ml-px md:mr-0 z-50 md:w-full">
        <div className="md:hidden h-full flex flex-col justify-center space-y-1">
          <div className="flex space-x-1">
            {chunkPathOne.map(({ title, path }) => (
              <Menubar className="w-1/2" key={title}>
                <MenubarMenu>
                  <MenubarTrigger
                    onClick={() => router.push(path)}
                    data-state={isSelected(path) ? 'open' : 'unchecked'}
                    className="w-full whitespace-nowrap cursor-pointer text-xs justify-center"
                  >
                    {title}
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            ))}
          </div>
          <div className="flex space-x-1">
            {chunkPathTwo.map(({ title, path }) => (
              <Menubar className="w-1/2" key={title}>
                <MenubarMenu>
                  <MenubarTrigger
                    onClick={() => router.push(path)}
                    data-state={isSelected(path) ? 'open' : 'unchecked'}
                    className="w-full whitespace-nowrap cursor-pointer text-xs justify-center"
                  >
                    {title}
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            ))}
          </div>
        </div>
        <div className="hidden md:flex w-full h-full items-center space-x-1 md:px-4">
          <Menubar className="w-fit">
            {paths.map(({ title, path }) => (
              <MenubarMenu key={title}>
                <MenubarTrigger
                  onClick={() => router.push(path)}
                  data-state={isSelected(path) ? 'open' : 'unchecked'}
                  className="whitespace-nowrap cursor-pointer text-sm"
                >
                  {title}
                </MenubarTrigger>
              </MenubarMenu>
            ))}
          </Menubar>
        </div>
      </div>
      <PageHeader
        title="Typography"
        description="Composite token translated into readily accessible Tailwind base & components layers."
        className="pt-[7.75rem] md:pt-24"
      />
      <div className="max-w-[80vw] px-4 mb-8 space-y-4 -mt-4 lg:mt-0">{children}</div>
    </>
  );
}
