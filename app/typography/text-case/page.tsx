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
    generated_class: <pre>normal-case</pre>,
  },
  {
    value: <pre>uppercase</pre>,
    generated_class: <pre>uppercase</pre>,
  },
  {
    value: <pre>lowercase</pre>,
    generated_class: <pre>lowercase</pre>,
  },
  {
    value: <pre>capitalize</pre>,
    generated_class: <pre>capitalize</pre>,
  },
];

const TextCase: FC = () => {
  return (
    <>
      <h2>Text case</h2>
      <CustomTable data={data} dataTitles={dataTitles} />
    </>
  );
};

export default TextCase;
