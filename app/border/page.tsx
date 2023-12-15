import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Info } from '@/components/ui/info';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';

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

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    parameter: 'width',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    default_value: <pre>0px</pre>,
    others: (
      <Info role="warning" className="px-2 py-1">
        <p className="w-fit">% will be transform to em</p>
      </Info>
    ),
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
      <div className="max-w-[80vw] px-4 mb-8 space-y-4 -mt-4 lg:mt-0">
        <CardTable data={data} dataTitles={dataTitles} cardTitle="parameter" />
        <TokenExample
          example={JSON.stringify(
            {
              global: {
                'my-border': {
                  value: {
                    width: '4',
                    style: 'dashed',
                    color: '{warning.default}',
                  },
                  type: 'border',
                },
              },
              dark: {
                'my-border': {
                  value: {
                    width: '2',
                    color: '#1d4ed8',
                  },
                  type: 'border',
                },
              },
            },
            null,
            2,
          )}
          usage={`<div className="my-border rounded-md w-24 h-24"></div>`}
        >
          <div className="my-border rounded-md w-24 h-24"></div>
        </TokenExample>
      </div>
    </>
  );
};

export default Border;
