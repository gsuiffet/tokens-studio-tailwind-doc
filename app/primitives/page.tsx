import React, { FC } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { dataTitles } from './constant';
import { fontSize } from './codeBlocks';

const data = [
  {
    token_type: 'fontSizes',
    tailwind_utility: 'fontSize',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    default_token_value: <pre>0px</pre>,
    usage: <pre>{`text-sd-{fontSize}`}</pre>,
  },
];

const Primitives: FC = () => {
  return (
    <>
      <section>
        <h2>Font size</h2>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
      </section>
      <TokenExample
        example={fontSize}
        usage={`<p className="text-sd-my-font-size-token">my-font-size-token</p>`}
      >
        <p className="text-sd-my-font-size-token">my-font-size-token</p>
      </TokenExample>
    </>
  );
};

export default Primitives;
