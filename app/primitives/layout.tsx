import React, { ReactNode } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';

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
  return (
    <>
      <PageHeader
        title="Primitives"
        description="Foundational CSS building blocks powered by design tokens."
        subMenu={paths}
      />
      {children}
    </>
  );
}
