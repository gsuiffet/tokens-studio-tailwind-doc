import React, { FC } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { dataTitles } from '../constant';
import { Info } from '@/components/ui/info';

const data = [
  {
    token_type: 'letterSpacing',
    tailwind_utility: 'letterSpacing',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    default_token_value: <pre>0px</pre>,
    usage: (
      <>
        <pre>{`tracking-sd-{letterSpacing}`}</pre>
        <Info role="warning" data="% will be transform to em" />
      </>
    ),
  },
  {
    token_type: 'lineHeights',
    tailwind_utility: 'lineHeight',
    allowed_units: <pre>px | %</pre>,
    default_unit: <pre>px</pre>,
    default_token_value: <pre>0px</pre>,
    usage: <pre>{`leading-sd-{lineHeight}`}</pre>,
  },
  {
    token_type: 'borderWidth',
    tailwind_utility: 'borderWidth',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    default_token_value: <pre>0px</pre>,
    usage: (
      <>
        <pre>{`border-sd-{borderWidth}`}</pre>
        <Info role="warning" data="% will be transform to em" />
      </>
    ),
  },
  {
    token_type: 'opacity',
    tailwind_utility: 'opacity',
    allowed_units: <pre>%</pre>,
    default_unit: null,
    default_token_value: <pre>1</pre>,
    usage: <pre>{`opacity-sd-{opacity}`}</pre>,
  },
  {
    token_type: 'sizing',
    tailwind_utility: 'spacing',
    allowed_units: <pre>px | rem | em</pre>,
    default_unit: <pre>px</pre>,
    default_token_value: <pre>0px</pre>,
    usage: (
      <>
        <pre>{`p-sd-{spacing}`}</pre>
        <pre>{`m-sd-{spacing}`}</pre>
        <pre>{`w-sd-{spacing}`}</pre>
        <pre>{`h-sd-{spacing}`}</pre>
        <pre>{`max-h-sd-{spacing}`}</pre>
        <pre>{`gap-sd-{spacing}`}</pre>
        <pre>{`top-sd-{spacing}`}</pre>
        <pre>{`right-sd-{spacing}`}</pre>
        <pre>{`bottom-sd-{spacing}`}</pre>
        <pre>{`inset-*-sd-{spacing}`}</pre>
        <pre>{`space-*-sd-{spacing}`}</pre>
        <pre>{`translate-*-sd-{spacing}`}</pre>
        <pre>{`scroll-*-sd-{spacing}`}</pre>
      </>
    ),
  },
  {
    token_type: 'dimension',
    tailwind_utility: 'spacing',
    allowed_units: <pre>px | rem | em</pre>,
    default_unit: <pre>px</pre>,
    default_token_value: <pre>0px</pre>,
    usage: (
      <>
        <pre>{`p-sd-{spacing}`}</pre>
        <pre>{`m-sd-{spacing}`}</pre>
        <pre>{`w-sd-{spacing}`}</pre>
        <pre>{`h-sd-{spacing}`}</pre>
        <pre>{`max-h-sd-{spacing}`}</pre>
        <pre>{`gap-sd-{spacing}`}</pre>
        <pre>{`top-sd-{spacing}`}</pre>
        <pre>{`right-sd-{spacing}`}</pre>
        <pre>{`bottom-sd-{spacing}`}</pre>
        <pre>{`inset-*-sd-{spacing}`}</pre>
        <pre>{`space-*-sd-{spacing}`}</pre>
        <pre>{`translate-*-sd-{spacing}`}</pre>
        <pre>{`scroll-*-sd-{spacing}`}</pre>
      </>
    ),
  },
];

const OtherPrimitives: FC = () => {
  return (
    <>
      <section>
        <h2>Other primitives</h2>
        <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
      </section>
    </>
  );
};

export default OtherPrimitives;
