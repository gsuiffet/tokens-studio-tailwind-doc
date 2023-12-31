import React, { FC } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { Info } from '@/components/ui/info';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import { borderRadius } from './codeBlocks';

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

const data = [
  {
    nb_of_values: 'Single value',
    value_example: <pre>6</pre>,
    css_corners: (
      <pre>
        {EmphasisAndLink({
          text: '6px all corners',
          emphasis: ['all corners'],
        })}
      </pre>
    ),
    generated_class: <pre>rounded-[6px]</pre>,
  },
  {
    nb_of_values: 'Two values',
    value_example: <pre>6 2</pre>,
    css_corners: (
      <div className="flex flex-col space-y-1">
        <pre>
          {EmphasisAndLink({
            text: '6px top-left-and-bottom-right',
            emphasis: ['top-left-and-bottom-right'],
          })}
        </pre>
        <pre>
          {EmphasisAndLink({
            text: '2px top-right-and-bottom-left',
            emphasis: ['top-right-and-bottom-left'],
          })}
        </pre>
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
      <div className="flex flex-col space-y-1">
        <pre>
          {EmphasisAndLink({
            text: '6px top-left',
            emphasis: ['top-left'],
          })}
        </pre>
        <pre>
          {EmphasisAndLink({
            text: '2px top-right-and-bottom-lef',
            emphasis: ['top-right-and-bottom-lef'],
          })}
        </pre>
        <pre>
          {EmphasisAndLink({
            text: '4px bottom-right',
            emphasis: ['bottom-right'],
          })}
        </pre>
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
      <div className="flex flex-col space-y-1">
        <pre>
          {EmphasisAndLink({
            text: '6px top-left',
            emphasis: ['top-left'],
          })}
        </pre>
        <pre>
          {EmphasisAndLink({
            text: '2px top-right',
            emphasis: ['top-right'],
          })}
        </pre>
        <pre>
          {EmphasisAndLink({
            text: '4px bottom-right',
            emphasis: ['bottom-right'],
          })}
        </pre>
        <pre>
          {EmphasisAndLink({
            text: '8px bottom-left',
            emphasis: ['bottom-left'],
          })}
        </pre>
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

      <Info
        role="warning"
        data={[
          EmphasisAndLink({
            text: 'Allowed units: px | % | rem | em',
            emphasis: ['px | % | rem | em'],
          }),
          EmphasisAndLink({
            text: 'Default unit: px',
            emphasis: ['px'],
          }),
        ]}
      />

      <section>
        <h2>All parameters</h2>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="nb_of_values" />
      </section>

      <TokenExample
        example={borderRadius}
        usage={`<div className="my-border-radius w-24 h-24 bg-sd-my-color"/>`}
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
    </>
  );
};

export default BorderRadius;
