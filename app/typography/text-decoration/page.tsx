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
    generated_class: <pre className="text-xs md:text-sm">no-underline</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">underline</pre>,
    generated_class: <pre className="text-xs md:text-sm">underline</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">line-through</pre>,
    generated_class: <pre className="text-xs md:text-sm">line-through</pre>,
  },
];

const TextDecoration: FC = () => {
  return (
    <>
      <h3 className="hidden lg:block text-2xl font-semibold leading-none tracking-tight">
        Text decoration
      </h3>
      <CustomTable data={data} dataTitles={dataTitles} />
    </>
  );
};

export default TextDecoration;
