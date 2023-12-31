import React, { FC } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { dataTitles } from '../constant';
import { color } from '../codeBlocks';

const data = [
  {
    token_type: 'color',
    tailwind_utility: 'color',
    allowed_units: null,
    default_unit: null,
    default_token_value: null,
    usage: (
      <>
        <pre>{`bg-sd-{color}`}</pre>
        <pre>{`text-sd-{color}`}</pre>
        <pre>{`border-sd-{color}`}</pre>
        <pre>{`divide-sd-{color}`}</pre>
        <pre>{`outline-sd-{color}`}</pre>
        <pre>{`ring-sd-{color}`}</pre>
        <pre>{`decoration-sd-{color}`}</pre>
        <pre>{`fill-sd-{color}`}</pre>
        <pre>{`shadow-sd-{color}`}</pre>
      </>
    ),
  },
];

const Color: FC = () => {
  return (
    <>
      <section>
        <h2>Color</h2>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
      </section>
      <TokenExample
        example={color}
        usage={`<div className="bg-sd-my-color rounded-md w-24 h-24"></div>`}
      >
        <div className="bg-sd-my-color rounded-md w-24 h-24"></div>
      </TokenExample>
    </>
  );
};

export default Color;
