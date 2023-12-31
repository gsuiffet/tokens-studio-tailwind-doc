import React, { ReactNode } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';

const paths = [
  {
    title: 'Typography',
    path: '/typography',
  },
  {
    title: 'Font Weight',
    path: '/typography/font-weight',
  },
  {
    title: 'Text Case',
    path: '/typography/text-case',
  },
  {
    title: 'Text Decoration',
    path: '/typography/text-decoration',
  },
];

export default function TypographyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageHeader
        title="Typography"
        description="Composite token translated into readily accessible Tailwind base & components layers."
        subMenu={paths}
      />
      {children}
    </>
  );
}
