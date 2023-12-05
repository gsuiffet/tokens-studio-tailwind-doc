import * as React from 'react';
import { Code } from '@/components/code';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/icon';
import { Info } from '@/components/info';
import { Next } from '@/components/next';
import { Steps } from '@/components/steps';
import globalTokens from './tokens/globalTokens.json'; // todo
import darkTokens from './tokens/darkTokens.json'; // todo

const step_1 = {
  title: 'Install Tokens Studio',
  description: (
    <p>
      Start by installing{' '}
      <Link href="https://tokens.studio" target="_blank" className="underline">
        Tokens Studio
      </Link>{' '}
      on your Figma project and click on the <strong>`New empty file`</strong> button.
    </p>
  ),
  element: (
    <div className="w-[80vw] max-w-[600px] relative">
      <Image
        src="/assets/tokens-studio/step-1.png"
        fill
        alt="step 1 Tokens Studio"
        className="!relative"
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 600px) 80vw, 600px"
      />
    </div>
  ),
};

const step_2 = {
  title: 'Create a dark theme',
  description: (
    <p>
      Add a New Set <strong>dark</strong> by clicking on the <strong>`New Set`</strong> button.
    </p>
  ),
  element: (
    <span className="pr-2 pl-3 border flex justify-between items-center w-[150px] bg-white text-primary text-black">
      New Set <Icon name="plus" size="large" />
    </span>
  ),
};

const step_3 = {
  title: 'Add default tokens',
  description: (
    <p>
      Select each theme (set), click on the JSON button <strong>`{JSON.stringify({})}`</strong>,
      copy and past the following JSON, then click the <strong>`Save JSON`</strong> button.
    </p>
  ),
  element: (
    <div className="w-[80vw] max-w-[600px] block lg:flex space-y-2 lg:space-y-0 lg:gap-2">
      <div className="w-full lg:1/2">
        <Code code={JSON.stringify(globalTokens, null, 2)} title="global.json" canExpand canCopy />
      </div>
      <div className="w-full lg:1/2">
        <Code code={JSON.stringify(darkTokens, null, 2)} title="dark.json" canExpand canCopy />
      </div>
    </div>
  ),
};

const step_4 = {
  title: 'Sync your tokens with your repository',
  description: (
    <div className="flex flex-col gap-2">
      <p>
        Follow this step{' '}
        <Link href="https://docs.tokens.studio/sync/sync" target="_blank" className="underline">
          Tokens Studio sync methods
        </Link>
        .
      </p>
      <Info role="warning">
        <p>
          Using the free version of Tokens Studio means that each theme is a <strong>`Set`</strong>.
        </p>
      </Info>
    </div>
  ),
};

export default function Installation() {
  return (
    <>
      <Steps steps={[step_1, step_2, step_3, step_4]} />
      <Next nextStep="installation/tokens-studio-tailwind" />
    </>
  );
}
