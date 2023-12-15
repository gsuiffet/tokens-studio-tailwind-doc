import React, { FC, ReactElement } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { Keys, dataTitles } from './constant';

const data: Record<Keys, string | ReactElement | null>[] = [
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
      <h3 className="hidden lg:block text-2xl font-semibold leading-none tracking-tight">
        Font size
      </h3>
      <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
      <TokenExample
        example={JSON.stringify(
          {
            global: {
              'my-font-size-token': {
                value: '32',
                type: 'fontSizes',
              },
            },
            dark: {
              'my-font-size-token': {
                value: '20',
                type: 'fontSizes',
              },
            },
          },
          null,
          2,
        )}
        usage={`<p className="text-sd-my-font-size-token">my-font-size-token</p>`}
      >
        <p className="text-sd-my-font-size-token">my-font-size-token</p>
      </TokenExample>
    </>
  );
};

export default Primitives;
