import React, { ReactNode } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';

const paths = [
  {
    title: 'General',
    path: '/generated-css',
  },
  {
    title: 'Variable Token',
    path: '/generated-css/variable-token',
  },
];

export default function GeneratedCSSLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageHeader
        title="Generated CSS from token"
        description="Transforming Tokens into Dynamic CSS"
        subMenu={paths}
      />
      {children}
    </>
  );
}
