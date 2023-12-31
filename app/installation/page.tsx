import * as React from 'react';
import { Code } from '@/components/ui/code';
import Image from 'next/image';
import { Icon } from '@/components/ui/icon';
import { Info } from '@/components/ui/info';
import { Next } from '@/components/ui/next';
import { Steps } from '@/components/ui/steps';
import { EmphasisAndLink } from '@/lib/emphasisAndLink';
import { dark, global } from './codeBlocks';

const step_1 = {
  title: 'Install Tokens Studio',
  description: (
    <>
      <p>
        {EmphasisAndLink({
          text: `Start by installing Tokens Studio on your Figma project and click on the \`New empty file\` button.`,
          emphasis: [`New empty file`],
          link: {
            match: 'Tokens Studio',
            href: 'https://tokens.studio',
          },
        })}
      </p>
      <Info
        data={EmphasisAndLink({
          text: `You can get a copy of the Tokens Studio Tailwind UI kit. See the Figma page.`,
          emphasis: [`Tokens Studio Tailwind`],
          link: {
            match: 'Figma page',
            href: '/figma',
          },
        })}
      />
    </>
  ),
  element: (
    <Image
      src="/assets/tokens-studio/step-1.png"
      fill
      alt="step 1 Tokens Studio"
      className="!relative"
      style={{ objectFit: 'contain' }}
      sizes="(max-width: 32rem) 100vw, 32rem"
    />
  ),
};

const step_2 = {
  title: 'Create a dark theme',
  description: (
    <p>
      {EmphasisAndLink({
        text: `Add a set dark by clicking on the \`New Set\` button.`,
        emphasis: ['dark', `New Set`],
      })}
    </p>
  ),
  element: (
    <span className="px-4 py-2 border flex justify-between items-center w-36 bg-white text-black">
      New Set <Icon name="plus" size="large" color="text-black" />
    </span>
  ),
};

const step_3 = {
  title: 'Add default tokens',
  description: (
    <>
      <p>
        {EmphasisAndLink({
          text: `Select each theme (set), click on the JSON button {},
          copy and past the following JSON, then click the \`Save JSON\`button.`,
          emphasis: ['{}', `Save JSON`],
        })}
      </p>
      <Info
        data={EmphasisAndLink({
          text: `Once you have defined both themes, try activating the dark theme by checking the checkbox in 
                  the 'dark' set. For further information, please refer to this link.`,
          emphasis: ["'dark' set"],
          link: {
            match: 'link',
            href: 'https://docs.tokens.studio/themes/token-sets',
          },
        })}
      />
    </>
  ),
  element: (
    <div className="space-y-2 w-full lg:flex lg:space-y-0 lg:gap-2 lg:w-3/5 xl:w-2/4">
      <Code code={global} title="global.json" language="json" canExpand canCopy />
      <Code code={dark} title="dark.json" language="json" canExpand canCopy />
    </div>
  ),
};

const step_4 = {
  title: 'Sync your tokens with your repository',
  description: (
    <>
      <p>
        {EmphasisAndLink({
          text: 'Follow this step Tokens Studio sync methods',
          link: {
            match: 'Tokens Studio sync methods',
            href: 'https://docs.tokens.studio/sync/sync',
          },
        })}
      </p>
      <Info
        role="warning"
        data={EmphasisAndLink({
          text: `Using the free version of Tokens Studio means that each theme is a \`Set\`.`,
          emphasis: [`Set`],
        })}
      />
    </>
  ),
};

export default function Installation() {
  return (
    <section>
      <Steps steps={[step_1, step_2, step_3, step_4]} />
      <Next nextStep="installation/tokens-studio-tailwind" />
    </section>
  );
}
