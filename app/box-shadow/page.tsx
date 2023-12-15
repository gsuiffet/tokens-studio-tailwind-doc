import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { TokenExample } from '@/components/ui/tokenExample';
import { CardTable } from '@/components/ui/cardTable';
import { Info } from '@/components/ui/info';

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

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    parameter: 'x',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    others: (
      <>
        <Info role="warning" className="px-2 py-1">
          <p className="w-fit">Required</p>
        </Info>
        <Info role="warning" className="px-2 py-1">
          <p className="w-fit">% will be transform to em</p>
        </Info>
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
        <Info role="warning" className="px-2 py-1">
          <p className="w-fit">Required</p>
        </Info>
        <Info role="warning" className="px-2 py-1">
          <p className="w-fit">% will be transform to em</p>
        </Info>
      </>
    ),
  },
  {
    parameter: 'blur',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    others: (
      <Info role="warning" className="px-2 py-1">
        <p className="w-fit">% will be transform to em</p>
      </Info>
    ),
  },
  {
    parameter: 'spread',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    allowed_values: null,
    others: (
      <Info role="warning" className="px-2 py-1">
        <p className="w-fit">% will be transform to em</p>
      </Info>
    ),
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
      <div className="max-w-[80vw] px-4 mb-8 space-y-4 -mt-4 lg:mt-0">
        <CardTable data={data} dataTitles={dataTitles} cardTitle="parameter" />
        <TokenExample
          example={JSON.stringify(
            {
              global: {
                'my-shadow-tokens': {
                  value: {
                    x: '0',
                    y: '25',
                    blur: '50',
                    spread: '-12',
                    color: '#1d4ed8',
                    type: 'dropShadow',
                  },
                  type: 'boxShadow',
                },
              },
              dark: {
                'my-shadow-tokens': {
                  value: {
                    x: '0',
                    y: '25',
                    blur: '50',
                    spread: '-12',
                    color: '#b91c1c',
                    type: 'dropShadow',
                  },
                  type: 'boxShadow',
                },
              },
            },
            null,
            2,
          )}
          usage={`<div className="shadow-sd-my-shadow-tokens rounded-md w-24 h-24 bg-red-100 dark:bg-blue-100"></div>`}
        >
          <div className="shadow-sd-my-shadow-tokens rounded-md w-24 h-24 bg-blue-100"></div>
        </TokenExample>
        <TokenExample
          example={JSON.stringify(
            {
              global: {
                shadows: {
                  default: {
                    value: '228, 10, 10',
                    type: 'color',
                  },
                },
                'my-complex-shadow-tokens': {
                  default: {
                    value: [
                      {
                        x: 5,
                        y: 5,
                        spread: 3,
                        color: 'rgba({shadows.default}, 0.15)',
                        blur: 5,
                        type: 'dropShadow',
                      },
                      {
                        x: 4,
                        y: 4,
                        spread: 6,
                        color: '#00000033',
                        blur: 5,
                        type: 'innerShadow',
                      },
                    ],
                    type: 'boxShadow',
                  },
                },
              },
              dark: {
                shadows: {
                  default: {
                    value: '145, 207, 118',
                    type: 'color',
                  },
                },
                'my-complex-shadow-tokens': {
                  default: {
                    value: [
                      {
                        x: 5,
                        y: 5,
                        spread: 3,
                        color: 'rgba({shadows.default}, 0.30)',
                        blur: 5,
                        type: 'dropShadow',
                      },
                      {
                        x: 4,
                        y: 4,
                        spread: 6,
                        color: '#00000033',
                        blur: 5,
                        type: 'innerShadow',
                      },
                    ],
                    type: 'boxShadow',
                  },
                },
              },
            },
            null,
            2,
          )}
          usage={`<div className="shadow-sd-my-complex-shadow-tokens-default rounded-md w-24 h-24 bg-red-100 dark:bg-blue-100"></div>`}
        >
          <div className="shadow-sd-my-complex-shadow-tokens-default rounded-md w-24 h-24 bg-blue-100"></div>
        </TokenExample>
      </div>
      {/*<CardTable data={data} dataTitles={dataTitles} />*/}
    </>
  );
};

export default BoxShadow;
