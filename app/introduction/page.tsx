import * as React from 'react';
import { Next } from '@/components/next';
import { PageHeader } from '@/components/pageHeader';
import { Info } from '@/components/info';
import { Code } from '@/components/code';
import tokens from './tokens/tokens.json';

export default function Introduction() {
  return (
    <>
      <PageHeader
        title="Introduction"
        description="Ensure consistency in design systems and speed up the integration when updating design tokens."
      />
      <div className="flex flex-col gap-8 px-4 pb-8">
        <p className="leading-7">
          <span className="underline">Compatibility:</span>
          {` This package is compatible with `}
          <strong>Tailwind CSS version ^3</strong>
          {` and currently supports `}
          <strong>the free version ^1 of Tokens-studio</strong>. For different versions, please
          verify compatibility or consider updating your Tailwind CSS installation.
        </p>
        <Info role="warning">
          <ul className="leading-7 list-disc">
            <li>
              Using the free version of Tokens Studio means that all your themes should be defined
              inside <strong>`$metadata.tokenSetOrder`</strong>.
            </li>
            <li>
              Ensure the JSON design tokens include a theme named <strong>`global`</strong>, which
              will be used to generate root CSS.
            </li>
          </ul>
        </Info>
        <div className="w-[80vw] md:w-full max-w-[600px] flex self-center">
          <Code code={JSON.stringify(tokens, null, 2)} title="tokens.json" />
        </div>
        <Next nextStep="installation" />
      </div>
    </>
  );
}
