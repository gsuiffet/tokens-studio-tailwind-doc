import * as React from 'react';
import { Next } from '@/components/ui/next';
import { PageHeader } from '@/components/ui/pageHeader';
import { Info } from '@/components/ui/info';
import { Code } from '@/components/ui/code';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import { tokens } from './codeBlocks';

export default function Introduction() {
  return (
    <>
      <PageHeader
        title="Introduction"
        description="Ensure consistency in design systems and speed up the integration when updating design tokens."
      />
      <section>
        <p>
          {EmphasisAndLink({
            text: `Compatibility: This package is compatible with Tailwind CSS version ^3 and currently 
                    supports the free version ^1 of Tokens-studio. For different versions, please verify 
                    compatibility or consider updating your Tailwind CSS installation.`,
            emphasis: [
              'Compatibility:',
              'Tailwind CSS version ^3',
              'the free version ^1 of Tokens-studio',
            ],
          })}
        </p>
        <Info
          role="warning"
          data={[
            EmphasisAndLink({
              text: `Using the free version of Tokens Studio means that all your themes should be defined
                    inside \`$metadata.tokenSetOrder\``,
              emphasis: ['$metadata.tokenSetOrder'],
            }),
            EmphasisAndLink({
              text: `Ensure the JSON design tokens include a theme named \`global\`, which
                    will be used to generate root CSS.`,
              emphasis: ['global'],
            }),
          ]}
        />
        <div className="w-full max-w-lg flex self-center">
          <Code code={tokens} title="tokens.json" language="json" />
        </div>
        <Next nextStep="installation" />
      </section>
    </>
  );
}
