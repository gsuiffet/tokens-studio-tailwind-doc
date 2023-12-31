import { PageHeader } from '@/components/ui/pageHeader';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import React from 'react';

export default function Home() {
  return (
    <>
      <PageHeader
        title="Figma"
        description={EmphasisAndLink({
          text: `Get your copy of the Tokens Studio Tailwind UI kit.`,
          link: {
            match: 'Tokens Studio Tailwind',
            href: 'https://www.figma.com/file/l1BdAbaiCi32Byt5qb56sC/Tokens-Studio-Tailwind?type=design&node-id=1%3A90&mode=design&t=YZ66XEVSge9buZI3-1',
          },
        })}
      />
      <div className="relative h-96">
        <iframe
          src="https://www.figma.com/embed?community_viewer=true&amp;embed_host=tokens-studio-tailwind&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl1BdAbaiCi32Byt5qb56sC"
          className="h-full w-full rounded-default absolute max-w-2xl"
        ></iframe>
      </div>
    </>
  );
}
