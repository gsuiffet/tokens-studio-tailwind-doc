import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Info } from '@/components/ui/info';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { border } from './codeBlocks';

type Keys =
  | 'parameter'
  | 'allowed_units'
  | 'default_unit'
  | 'allowed_values'
  | 'default_value'
  | 'others';

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
    key: 'default_value',
    value: 'Default value',
  },
  {
    key: 'others',
    value: 'Information',
  },
];

const data = [
  {
    parameter: 'width',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    default_value: <pre>0px</pre>,
    others: <Info role="warning" data="% will be transform to em" />,
  },
  {
    parameter: 'color',
    allowed_units: null,
    default_unit: null,
    allowed_values: <pre className="break-all">Hex | RGB | RGBA | HSL | HSLA</pre>,
    default_value: <pre>transparent</pre>,
    others: null,
  },
  {
    parameter: 'style',
    allowed_units: null,
    default_unit: null,
    allowed_values: <pre>solid | dashed</pre>,
    default_value: <pre>solid</pre>,
    others: null,
  },
];

const Border: FC = () => {
  return (
    <>
      <PageHeader
        title="Border"
        description="Composite token translated into readily accessible Tailwind components."
      />
      <section>
        <h2>All parameters</h2>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="parameter" />
      </section>
      <TokenExample
        example={border}
        usage={`<div className="my-border rounded-md w-24 h-24"></div>`}
      >
        <div className="my-border rounded-md w-24 h-24"></div>
      </TokenExample>
    </>
  );
};

export default Border;
