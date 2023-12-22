'use client';
import React, { FC, ReactElement, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { chunk } from 'lodash';

interface Props {
  title: string;
  description: string | ReactElement;
  className?: string;
  subMenu?: Record<'title' | 'path', string>[];
}

const PageHeader: FC<Props> = ({ title, description, subMenu }) => {
  const selectedPath = usePathname();
  const router = useRouter();

  const isSelected = (pathname: string) => {
    return selectedPath === pathname;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPath]);

  const chunks = chunk(subMenu, 2);

  let paddingClassName = 'pt-8 md:pt-12';

  if (chunks.length === 1) {
    paddingClassName = 'pt-20 md:pt-24';
  } else if (chunks.length === 2) {
    paddingClassName = 'pt-[7.75rem] md:pt-24';
  }

  return (
    <>
      {subMenu && (
        <div
          className={`${
            chunks.length > 1 ? 'h-[6.75rem]' : 'h-16'
          } md:h-24 md:flex fixed bg-sd-background-default/95 backdrop-blur right-0 left-0 md:right-auto md:left-auto mx-6 md:-ml-px md:mr-0 z-50 md:w-full`}
        >
          <div className="md:hidden h-full flex flex-col justify-center space-y-1">
            {chunks.map((menuItems, index) => (
              <div className="flex space-x-1" key={index}>
                {menuItems.map(({ title, path }) => (
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
            ))}
          </div>
          <div className="hidden md:flex w-full h-full items-center space-x-1">
            <Menubar className="w-fit">
              {subMenu.map(({ title, path }) => (
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
      )}
      <section className={`${paddingClassName} gap-2`}>
        <h1>{title}</h1>
        <p className="subtitle lg:subtitle-lg text-sd-muted-foreground">{description}</p>
      </section>
    </>
  );
};

export { PageHeader };
