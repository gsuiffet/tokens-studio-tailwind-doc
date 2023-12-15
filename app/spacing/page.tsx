import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Info } from '@/components/ui/info';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { Rocket } from 'lucide-react';

type Keys = 'nb_of_values' | 'value_example' | 'generated_class';

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
    key: 'generated_class',
    value: 'Generated class',
  },
];

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    nb_of_values: 'Single value',
    value_example: <pre>6</pre>,
    generated_class: <pre>gap-[6px]</pre>,
  },
  {
    nb_of_values: 'Two values',
    value_example: <pre>6 2</pre>,
    generated_class: <pre className="overflow-auto w-fit">py-[6px] px-[6px]</pre>,
  },
  {
    nb_of_values: 'Three values',
    value_example: <pre>6 2 4</pre>,
    generated_class: <pre className="overflow-auto w-fit">pt-[6px] px-[2px] pb-[4px]</pre>,
  },
  {
    nb_of_values: 'Four values',
    value_example: <pre>6 2 4 8</pre>,
    generated_class: <pre className="overflow-auto w-fit">pt-[6px] pr-[2px] pb-[4px] pl-[8px]</pre>,
  },
];

const Spacing: FC = () => {
  return (
    <>
      <PageHeader
        title="BorderRadius"
        description="Composite token translated into readily accessible Tailwind components."
      />
      <div className="max-w-[80vw] px-4 mb-8 space-y-4 -mt-4 lg:mt-0">
        <div className="flex flex-col mb-8 space-y-2">
          <div className="flex items-center space-x-2">
            <p>Allowed units:</p>
            <pre>px | % | rem | em</pre>
          </div>
          <div className="flex items-center space-x-2">
            <p>Default unit:</p>
            <pre>px</pre>
          </div>
          <div className="flex items-center space-x-2">
            <p>Information:</p>
            <Info role="warning" className="px-2 py-1">
              <p className="w-fit">% will be transform to em</p>
            </Info>
          </div>
        </div>
      </div>
      <CardTable data={data} dataTitles={dataTitles} cardTitle="nb_of_values" />
      <TokenExample
        example={JSON.stringify(
          {
            global: {
              'my-spacing': {
                value: '1rem 20 8 14',
                type: 'spacing',
              },
            },
            dark: {
              'my-spacing': {
                value: '2rem 50% 20',
                type: 'spacing',
              },
            },
          },
          null,
          2,
        )}
        usage={`<div className="my-spacing bg-sd-my-color w-fit">\n  <Rocket className="w-12 h-12 text-sd-primary-foreground"/>\n</div>`}
      >
        <div className="my-spacing bg-sd-my-color w-fit">
          <Rocket className="w-12 h-12 text-sd-primary-foreground" />
        </div>
      </TokenExample>
    </>
  );
};

export default Spacing;
