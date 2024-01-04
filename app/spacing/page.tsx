import React, { FC, ReactElement } from 'react';
import { PageHeader } from '@/components/ui/pageHeader';
import { Info } from '@/components/ui/info';
import { CardTable } from '@/components/ui/cardTable';
import { TokenExample } from '@/components/ui/tokenExample';
import { Star } from 'lucide-react';
import { spacing } from './codeBlocks';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';

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
    generated_class: <pre>py-[6px] px-[6px]</pre>,
  },
  {
    nb_of_values: 'Three values',
    value_example: <pre>6 2 4</pre>,
    generated_class: <pre>pt-[6px] px-[2px] pb-[4px]</pre>,
  },
  {
    nb_of_values: 'Four values',
    value_example: <pre>6 2 4 8</pre>,
    generated_class: <pre>pt-[6px] pr-[2px] pb-[4px] pl-[8px]</pre>,
  },
];

const Spacing: FC = () => {
  return (
    <>
      <PageHeader
        title="Spacing"
        description="Composite token translated into readily accessible Tailwind components."
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
          EmphasisAndLink({
            text: 'Transform: % will be transform to em',
            emphasis: ['% will be transform to em'],
          }),
        ]}
      />

      <section>
        <h2>All parameters</h2>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="nb_of_values" />
      </section>

      <TokenExample
        example={spacing}
        usage={`<div className="my-spacing bg-sd-my-color w-[100px] h-[50px] rounded-md">\n  <Star className="w-[24px] h-[24px] text-sd-primary-foreground"/>\n</div>`}
      >
        <div className="my-spacing bg-sd-my-color w-[100px] h-[50px] rounded-md">
          <Star className="w-[24px] h-[24px] text-white" />
        </div>
      </TokenExample>
    </>
  );
};

export default Spacing;
