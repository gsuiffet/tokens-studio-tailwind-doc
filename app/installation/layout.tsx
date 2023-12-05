'use client';
import React, { ReactNode } from 'react';
import { PageHeader } from '@/components/pageHeader';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function InstallationLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isTokensStudioTailwindStep = pathname === '/installation/tokens-studio-tailwind';
  const router = useRouter();

  return (
    <>
      <PageHeader
        title="Installation"
        description={
          <>
            Streamline your workflow by synchronizing your design tokens with your repository.{' '}
            <strong>Tokens Studio Tailwind</strong> will then generate all the corresponding
            variables and components.
          </>
        }
      />
      <Menubar className="mb-8 w-fit">
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => router.push('/installation')}
            data-state={!isTokensStudioTailwindStep ? 'open' : 'unchecked'}
            className="whitespace-nowrap cursor-pointer text-xs md:text-sm"
          >
            Tokens Studio
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => router.push('/installation/tokens-studio-tailwind')}
            data-state={isTokensStudioTailwindStep ? 'open' : 'unchecked'}
            className="whitespace-nowrap cursor-pointer text-xs md:text-sm"
          >
            Tokens Studio Tailwind
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      {children}
    </>
  );
}
