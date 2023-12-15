import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';

type Keys = 'nb_of_values' | 'value_example' | 'generated_class' | 'css_corners';

const dataTitles: { key: Keys; value: string }[] = [
  {
    key: 'nb_of_values',
    value: 'Number of values',
  },
  {
    key: 'value_example',
    value: 'Value example',
  },
  {
    key: 'css_corners',
    value: 'CSS corners',
  },
  {
    key: 'generated_class',
    value: 'Generated class',
  },
];

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    nb_of_values: 'Single value',
    value_example: <pre>6</pre>,
    css_corners: (
      <div className="flex items-center whitespace-nowrap space-x-1">
        <pre>6px</pre>
        <p>all corners</p>
      </div>
    ),
    generated_class: <pre>rounded-[6px]</pre>,
  },
  {
    nb_of_values: 'Two values',
    value_example: <pre>6 2</pre>,
    css_corners: (
      <div className="flex flex-col whitespace-nowrap space-y-1">
        <div className="flex items-center space-x-1">
          <pre>6px</pre>
          <p className="overflow-auto w-auto">top-left-and-bottom-right</p>
        </div>
        <div className="flex items-center space-x-1">
          <pre>2px</pre>
          <p className="overflow-auto w-auto">top-right-and-bottom-left</p>
        </div>
      </div>
    ),
    generated_class: (
      <pre className="overflow-auto w-auto">
        rounded-ss-[6px] rounded-ee-[6px] rounded-se-[2px] rounded-es-[2px]
      </pre>
    ),
  },
  {
    nb_of_values: 'Three values',
    value_example: <pre>6 2 4</pre>,
    css_corners: (
      <div className="flex flex-col whitespace-nowrap space-y-1">
        <div className="flex items-center space-x-1">
          <pre>6px</pre>
          <p>top-left</p>
        </div>
        <div className="flex items-center space-x-1">
          <pre>2px</pre>
          <p className="overflow-auto w-auto">top-right-and-bottom-left</p>
        </div>
        <div className="flex items-center space-x-1">
          <pre>2px</pre>
          <p>bottom-right</p>
        </div>
      </div>
    ),
    generated_class: (
      <pre className="overflow-auto w-auto">
        rounded-ss-[6px] rounded-se-[2px] rounded-es-[2px] rounded-ee-[4px]
      </pre>
    ),
  },
  {
    nb_of_values: 'Four values',
    value_example: <pre>6 2 4 8</pre>,
    css_corners: (
      <div className="flex flex-col whitespace-nowrap space-y-1">
        <div className="flex items-center space-x-1">
          <pre>6px</pre>
          <p>top-left</p>
        </div>
        <div className="flex items-center space-x-1">
          <pre>2px</pre>
          <p>top-right</p>
        </div>
        <div className="flex items-center space-x-1">
          <pre>2px</pre>
          <p>bottom-right</p>
        </div>
        <div className="flex items-center space-x-1">
          <pre>2px</pre>
          <p>bottom-left</p>
        </div>
      </div>
    ),
    generated_class: (
      <pre className="overflow-auto w-auto">
        rounded-ss-[6px] rounded-se-[2px] rounded-ee-[4px] rounded-es-[8px]
      </pre>
    ),
  },
];

const BorderRadius: FC = () => {
  return (
    <>
      <PageHeader
        title="BorderRadius"
        description="Composite token translated into readily accessible Tailwind components. The generated classes accommodate the current text orientation (RTL or LTR)."
      />
      <div className="max-w-[80vw] px-4 mb-8 space-y-4 -mt-4 lg:mt-0">
        <div className="flex flex-col mb-8 space-y-2">
          <div className="flex items-center space-x-2">
            <p>Allowed units:</p>
            <pre>px | % | rem</pre>
          </div>
          <div className="flex items-center space-x-2">
            <p>Default unit:</p>
            <pre>px</pre>
          </div>
        </div>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="nb_of_values" />
        <TokenExample
          example={JSON.stringify(
            {
              global: {
                'my-border-radius': {
                  value: '10% 30% 50% 70%',
                  type: 'borderRadius',
                },
              },
              dark: {
                'my-border-radius': {
                  value: '10px 160px 6px',
                  type: 'borderRadius',
                },
              },
            },
            null,
            2,
          )}
          usage={`<div className="my-border-radius w-24 h-24 bg-sd-my-color"></div>`}
        >
          <div className="flex space-x-2">
            <div
              className="my-border-radius w-24 h-24 bg-sd-my-color flex items-center justify-center"
              dir="ltr"
            >
              LTR
            </div>
            <div
              className="my-border-radius w-24 h-24 bg-sd-my-color flex items-center justify-center"
              dir="rtl"
            >
              RTL
            </div>
          </div>
        </TokenExample>
      </div>
    </>
  );
};

export default BorderRadius;
