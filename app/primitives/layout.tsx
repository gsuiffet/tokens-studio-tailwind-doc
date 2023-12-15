'use client';
import React, { Fragment, ReactNode, useEffect } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const paths = [
  {
    title: 'Font size',
    path: '/primitives',
  },
  {
    title: 'Color',
    path: '/primitives/color',
  },
  {
    title: 'Background image',
    path: '/primitives/background-image',
  },
  {
    title: 'Other primitives',
    path: '/primitives/other-primitives',
  },
];

export default function PrimitivesLayout({ children }: { children: ReactNode }) {
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
        title="Primitives"
        description="Foundational CSS building blocks powered by design tokens."
        className="pt-[7.75rem] md:pt-24"
      />
      <div className="max-w-[80vw] px-4 mb-8 space-y-4 -mt-4 lg:mt-0">{children}</div>
    </>
  );
}
