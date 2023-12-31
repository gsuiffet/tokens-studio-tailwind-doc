import React, { FC } from 'react';
import { CustomTable } from '@/components/ui/customTable';

type Keys = 'value' | 'generated_class';

const dataTitles: { key: Keys; value: string }[] = [
  {
    key: 'value',
    value: 'Value',
  },
  {
    key: 'generated_class',
    value: 'Generated class',
  },
];

const data = [
  {
    value: <pre>none</pre>,
    generated_class: <pre>no-underline</pre>,
  },
  {
    value: <pre>underline</pre>,
    generated_class: <pre>underline</pre>,
  },
  {
    value: <pre>line-through</pre>,
    generated_class: <pre>line-through</pre>,
  },
];

const TextDecoration: FC = () => {
  return (
    <>
      <h2>Text decoration</h2>
      <CustomTable data={data} dataTitles={dataTitles} />
    </>
  );
};

export default TextDecoration;
