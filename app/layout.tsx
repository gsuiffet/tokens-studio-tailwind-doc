import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import Link from 'next/link';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-Inter',
});

export const metadata: Metadata = {
  title: 'Tokens Studio Tailwind Documentation',
  description: 'Comprehensive documentation for Tokens Studio Tailwind package',
  authors: {
    name: 'Suiffet Guillaume',
  },
  keywords: ['Tokens Studio', 'Tailwind', 'Documentation', 'Design Tokens', 'CSS Variables'],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning={true}>
      <body
        lang="en"
        className={cn('bg-sd-background-default font-Inter antialiased', fontInter.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container flex">
              {/*<aside className="hidden md:flex w-60">*/}
              <aside className="hidden md:flex w-60">
                <Menu />
              </aside>
              <main className="w-full px-4 pb-4 flex flex-col gap-8">
                {/*<div className="w-full md:max-w-[550px] lg:max-w-[980px]">{children}</div>*/}
                {/*<div className="w-full md:max-w-[calc(100vw-15rem)]">{children}</div>*/}
                {/*<div className="w-full md:max-w-[calc(100vw-15rem)]">{children}</div>*/}
                {children}
                {/*h-[calc(100vh-112px)]*/}
              </main>
            </div>
            <footer className="container mt-auto h-14 border-t flex items-center bg-sd-background-default">
              <p className="text-sd-muted-foreground text-xs sm:text-sm">
                This website has been made using <strong>Tokens Studio Tailwind</strong>. See the
                source code on {/*todo*/}
                <Link href="https://www" className="underline">
                  GitHub
                </Link>
                .
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
