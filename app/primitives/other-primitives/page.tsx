import React, { FC, ReactElement } from 'react';
import { CardTable } from '@/components/ui/cardTable';
import { Keys, dataTitles } from '../constant';
import { Info } from '@/components/ui/info';

const data: Record<Keys, string | ReactElement | null>[] = [
  {
    token_type: 'letterSpacing',
    tailwind_utility: 'letterSpacing',
    allowed_units: <pre>px | % | rem | em</pre>,
    default_unit: <pre>px</pre>,
    default_token_value: <pre>0px</pre>,
    usage: (
      <>
        <pre>{`tracking-sd-{letterSpacing}`}</pre>
        <Info role="warning" className="px-2 py-1">
          <p className="w-fit">% will be transform to em</p>
        </Info>
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
        <Info role="warning" className="px-2 py-1">
          <p className="w-fit">% will be transform to em</p>
        </Info>
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
      <h3 className="hidden lg:block text-2xl font-semibold leading-none tracking-tight">
        Other primitives
      </h3>
      <CardTable data={data} dataTitles={dataTitles} cardTitle="tailwind_utility" />
    </>
  );
};

export default OtherPrimitives;
