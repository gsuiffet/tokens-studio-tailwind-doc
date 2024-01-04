import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';

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
              <aside className="hidden md:flex w-60">
                <Menu />
              </aside>
              <main className="w-full px-sd-sizing-sm pb-sd-sizing-2-xl flex flex-col gap-sd-sizing-lg">
                {children}
              </main>
            </div>
            <footer className="container mt-auto h-sd-sizing-3-xl border-t flex items-center">
              <p className="text-sd-muted-foreground text-xs sm:text-sm">
                {EmphasisAndLink({
                  text: `This website has been made using Tokens Studio Tailwind. See the source code on GitHub.`,
                  emphasis: ['Tokens Studio Tailwind'],
                  link: {
                    match: 'GitHub',
                    href: 'https://github.com/gsuiffet/tokens-studio-tailwind-doc',
                  },
                })}
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
