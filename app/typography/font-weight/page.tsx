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
    value: <pre>Thin</pre>,
    generated_class: <pre>font-thin</pre>,
  },
  {
    value: <pre>100</pre>,
    generated_class: <pre>font-thin</pre>,
  },
  {
    value: <pre>Thin Italic</pre>,
    generated_class: <pre>font-thin italic</pre>,
  },
  {
    value: <pre>Extra Light</pre>,
    generated_class: <pre>font-extralight</pre>,
  },
  {
    value: <pre>200</pre>,
    generated_class: <pre>font-extralight</pre>,
  },
  {
    value: <pre>Extra Light Italic</pre>,
    generated_class: <pre>font-extralight italic</pre>,
  },
  {
    value: <pre>Light</pre>,
    generated_class: <pre>font-light</pre>,
  },
  {
    value: <pre>300</pre>,
    generated_class: <pre>font-light</pre>,
  },
  {
    value: <pre>Light Italic</pre>,
    generated_class: <pre>font-light italic</pre>,
  },
  {
    value: <pre>Regular</pre>,
    generated_class: <pre>font-normal</pre>,
  },
  {
    value: <pre>400</pre>,
    generated_class: <pre>font-normal</pre>,
  },
  {
    value: <pre>Regular Italic</pre>,
    generated_class: <pre>font-normal italic</pre>,
  },
  {
    value: <pre>Medium</pre>,
    generated_class: <pre>font-medium</pre>,
  },
  {
    value: <pre>500</pre>,
    generated_class: <pre>font-medium</pre>,
  },
  {
    value: <pre>Medium Italic</pre>,
    generated_class: <pre>font-medium italic</pre>,
  },
  {
    value: <pre>Semi Bold</pre>,
    generated_class: <pre>font-semibold</pre>,
  },
  {
    value: <pre>600</pre>,
    generated_class: <pre>font-semibold</pre>,
  },
  {
    value: <pre>Semi Bold Italic</pre>,
    generated_class: <pre>font-semibold italic</pre>,
  },
  {
    value: <pre>Bold</pre>,
    generated_class: <pre>font-bold</pre>,
  },
  {
    value: <pre>700</pre>,
    generated_class: <pre>font-bold</pre>,
  },
  {
    value: <pre>Bold Italic</pre>,
    generated_class: <pre>font-bold italic</pre>,
  },
  {
    value: <pre>Extra Bold</pre>,
    generated_class: <pre>font-extrabold</pre>,
  },
  {
    value: <pre>800</pre>,
    generated_class: <pre>font-extrabold</pre>,
  },
  {
    value: <pre>Extra Bold Italic</pre>,
    generated_class: <pre>font-extrabold italic</pre>,
  },
  {
    value: <pre>Black</pre>,
    generated_class: <pre>font-black</pre>,
  },
  {
    value: <pre>900</pre>,
    generated_class: <pre>font-black</pre>,
  },
  {
    value: <pre>Black Italic</pre>,
    generated_class: <pre>font-black italic</pre>,
  },
];

const FontWeight: FC = () => {
  return (
    <>
      <h2>Font Weight</h2>
      <CustomTable data={data} dataTitles={dataTitles} />
    </>
  );
};

export default FontWeight;
