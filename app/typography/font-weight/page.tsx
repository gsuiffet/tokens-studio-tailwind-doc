import React, { FC, ReactElement } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
    value: <pre className="text-xs md:text-sm">Thin</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-thin</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">100</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-thin</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Thin Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-thin italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Extra Light</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-extralight</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">200</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-extralight</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Extra Light Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-extralight italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Light</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-light</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">300</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-light</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Light Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-light italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Regular</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-normal</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">400</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-normal</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Regular Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-normal italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Medium</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-medium</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">500</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-medium</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Medium Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-medium italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Semi Bold</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-semibold</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">600</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-semibold</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Semi Bold Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-semibold italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Bold</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-bold</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">700</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-bold</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Bold Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-bold italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Extra Bold</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-extrabold</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">800</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-extrabold</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Extra Bold Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-extrabold italic</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Black</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-black</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">900</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-black</pre>,
  },
  {
    value: <pre className="text-xs md:text-sm">Black Italic</pre>,
    generated_class: <pre className="text-xs md:text-sm">font-black italic</pre>,
  },
];

const FontWeight: FC = () => {
  return (
    <>
      <h3 className="hidden lg:block text-2xl font-semibold leading-none tracking-tight">
        Font Weight
      </h3>{' '}
      <CustomTable data={data} dataTitles={dataTitles} />
    </>
  );
};

export default FontWeight;
