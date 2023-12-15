import React, { FC, ReactElement } from 'react';
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

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    value: <pre className="text-xs md:text-sm">none</pre>,
    generated_class: <pre className="text-xs md:text-sm">normal-case</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">uppercase</pre>,
    generated_class: <pre className="text-xs md:text-sm">uppercase</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">lowercase</pre>,
    generated_class: <pre className="text-xs md:text-sm">lowercase</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">capitalize</pre>,
    generated_class: <pre className="text-xs md:text-sm">capitalize</pre>,
  },
];

const TextCase: FC = () => {
  return (
    <>
      <h3 className="hidden lg:block text-2xl font-semibold leading-none tracking-tight">
        Text case
      </h3>
      <CustomTable data={data} dataTitles={dataTitles} />
    </>
  );
};

export default TextCase;
