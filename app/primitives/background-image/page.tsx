import React, { FC } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { dataTitles } from '../constant';
import { Info } from '@/components/ui/info';
import { backgroundImage } from '../codeBlocks';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';

const data = [
  {
    token_type: 'color',
    tailwind_utility: 'backgroundImage',
    allowed_units: null,
    default_unit: null,
    default_token_value: null,
    usage: (
      <>
        <pre>{`bg-sd-{backgroundImage}`}</pre>
      </>
    ),
  },
];

const BackgroundImage: FC = () => {
  return (
    <>
      <section>
        <h2>Background image</h2>
        <Info
          role="warning"
          data={EmphasisAndLink({
            text: 'This handle linear-gradient see Tokens Studio documentation',
            emphasis: ['linear-gradient'],
            link: {
              match: 'Tokens Studio documentation',
              href: 'https://docs.tokens.studio/available-tokens/color-tokens#gradients',
            },
          })}
        />
        <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
      </section>

      <TokenExample
        example={backgroundImage}
        usage={`<div className="bg-sd-my-gradient rounded-md w-24 h-24"></div>`}
      >
        <div className="bg-sd-my-gradient rounded-md w-24 h-24"></div>
      </TokenExample>
    </>
  );
};

export default BackgroundImage;
