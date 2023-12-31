import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { TokenExample } from '@/components/ui/tokenExample';
import { CardTable } from '@/components/ui/cardTable';
import { Info } from '@/components/ui/info';
import { complexShadow, simpleShadow } from '@/app/box-shadow/codeBlocks';

type Keys = 'parameter' | 'allowed_units' | 'default_unit' | 'allowed_values' | 'others';

const dataTitles: { key: Keys; value: string }[] = [
  {
    key: 'parameter',
    value: 'Parameter',
  },
  {
    key: 'allowed_units',
    value: 'Allowed units',
  },
  {
    key: 'default_unit',
    value: 'Default unit',
  },
  {
    key: 'allowed_values',
    value: 'Allowed values',
  },
  {
    key: 'others',
    value: 'Information',
  },
];

const data = [
  {
    parameter: 'x',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    others: (
      <>
        <Info role="warning" data="Required" />
        <Info role="warning" data="% will be transform to em" />
      </>
    ),
  },
  {
    parameter: 'y',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    others: (
      <>
        <Info role="warning" data="Required" />
        <Info role="warning" data="% will be transform to em" />
      </>
    ),
  },
  {
    parameter: 'blur',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    others: <Info role="warning" data="% will be transform to em" />,
  },
  {
    parameter: 'spread',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    others: <Info role="warning" data="% will be transform to em" />,
  },
  {
    parameter: 'type',
    allowed_units: null,
    default_unit: null,
    allowed_values: <pre>innerShadow | dropShadow</pre>,
    others: null,
  },
  {
    parameter: 'color',
    allowed_units: null,
    default_unit: null,
    allowed_values: null,
    others: null,
  },
];

const BoxShadow: FC = () => {
  return (
    <>
      <PageHeader
        title="BoxShadow"
        description="Spécial primitive token composed of multiple parameters."
      />

      <section>
        <h2>All parameters</h2>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="parameter" />
      </section>

      <TokenExample
        example={simpleShadow}
        usage={`<div className="shadow-sd-my-shadow-tokens rounded-md w-24 h-24"></div>`}
      >
        <div className="shadow-sd-my-shadow-tokens rounded-md w-24 h-24"></div>
      </TokenExample>

      <TokenExample
        example={complexShadow}
        usage={`<div className="shadow-sd-my-complex-shadow-tokens-default rounded-md w-24 h-24 bg-sd-blue-100"></div>`}
      >
        <div className="shadow-sd-my-complex-shadow-tokens-default rounded-md w-24 h-24 bg-sd-blue-100"></div>
      </TokenExample>
    </>
  );
};

export default BoxShadow;
