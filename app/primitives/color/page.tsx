import React, { FC, ReactElement } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { Keys, dataTitles } from '../constant';

const data: Record<Keys, string | ReactElement | null>[] = [
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
      <h3 className="hidden lg:block text-2xl font-semibold leading-none tracking-tight">Color</h3>
      <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
      <TokenExample
        example={JSON.stringify(
          {
            global: {
              'my-color': {
                value: '#b91c1c',
                type: 'color',
              },
            },
            dark: {
              'my-color': {
                value: '#1d4ed8',
                type: 'color',
              },
            },
          },
          null,
          2,
        )}
        usage={`<div className="bg-sd-my-color rounded-md w-24 h-24"></div>`}
      >
        <div className="bg-sd-my-color rounded-md w-24 h-24"></div>
      </TokenExample>
    </>
  );
};

export default Color;
