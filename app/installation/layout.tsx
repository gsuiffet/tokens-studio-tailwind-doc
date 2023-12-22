import React, { ReactNode } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';

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
  return (
    <>
      <PageHeader
        title="Installation"
        description={EmphasisAndLink({
          text: `Streamline your workflow by synchronizing your design tokens with your repository.
            Tokens Studio Tailwind will then generate all the corresponding variables and components.`,
          emphasis: ['Tokens Studio Tailwind'],
        })}
        subMenu={paths}
      />
      {children}
    </>
  );
}
